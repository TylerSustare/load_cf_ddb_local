// ➜ docker run -p 8000:8000 dwmkerr/dynamodb -sharedDb
const _ = require("lodash");
const AWS = require("aws-sdk");
const YAML = require("yamljs");
const fs = require("fs");

AWS.config.update({ region: "us-east-1" });

console.log(AWS.config.credentials);

AWS.config.update({ accessKeyId: "abcde", secretAccessKey: "abcde" });

const dynamo = new AWS.DynamoDB({ endpoint: "http://localhost:8000" });

async function createResources(yamlTemplate) {
  if (!fs.existsSync(yamlTemplate)) {
    throw new Error("Invalid template path. File not found.");
  }

  const { Resources: resources = null } = YAML.load(yamlTemplate);

  console.log(resources);

  const loadResource = (properties) => dynamo.createTable(properties).promise();

  return _(resources)
    .pickBy((resource) => {
      const { Type: type } = resource;
      return type === "AWS::DynamoDB::Table";
    })
    .reduce(async (previousPromise, resource) => {
      const { Properties: properties } = resource;

      const collection = await previousPromise;
      console.log(`Creating table ${properties.TableName}`);

      let table;
      try {
        table = await loadResource(properties);
        collection.created.push(table);
      } catch (e) {
        collection.failed.push(e);
      }

      return collection;
    }, Promise.resolve({ created: [], failed: [] }));
}

async function destroyResources(yamlTemplate) {
  if (!fs.existsSync(yamlTemplate)) {
    throw new Error("Invalid template path. File not found.");
  }

  const { Resources: resources = null } = YAML.load(yamlTemplate);

  const destroyResource = (properties) =>
    dynamo.deleteTable({ TableName: properties.TableName }).promise();

  return _(resources)
    .pickBy((resource) => {
      const { Type: type } = resource;
      return type === "AWS::DynamoDB::Table";
    })
    .reduce(async (previousPromise, resource) => {
      const { Properties: properties } = resource;

      const collection = await previousPromise;
      console.log(`Deleting table ${properties.TableName}`);

      let table;
      try {
        table = await destroyResource(properties);
        collection.deleted.push(table);
      } catch (e) {
        collection.failed.push(e);
      }

      return collection;
    }, Promise.resolve({ deleted: [], failed: [] }));
}

const cloudFormation = __dirname + "/cf.yaml";
let action;

switch (process.env.ACTION) {
  case "CREATE":
    action = createResources(cloudFormation);
    break;
  case "DELETE":
    action = destroyResources(cloudFormation);
    break;
  default:
    createResources(cloudFormation);
}

action.then(console.log).catch(console.log);
