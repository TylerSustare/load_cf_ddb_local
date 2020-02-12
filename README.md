# Requires a local Dynamo install. 
### I've been using **_dwmkerr/dynamodb_** https://github.com/dwmkerr/docker-dynamodb & https://hub.docker.com/r/dwmkerr/dynamodb for being able to share database instances between code and the DDB shell. The official AWS one is probably fine.

## 1. get local Dynamo running enter the following in your terminal
``` 
$ docker run -p 8000:8000 dwmkerr/dynamodb -sharedDb
```

I can't stress how important the `-sharedDb` flag is. This allows you to run DDB commands from within scripts and the shell

If you go to `localhost:8000/shell` you can start playing around with DynamoDB Commands 🎉
Note, it looks like this only works on Chrome for the time being.

___ 

## 2. Create DDB Table from CloudFormation
Now that we have DynamoDB running locally with a shared DB we can create the table defined in `cf.yaml`

``` 
$ node ddb_local.js
```

This will create the table in the DB on port 8000. 

___

## 3. Seed the data
Run the following command to seed the **Content** table
``` 
$ node seed.js
```
___ 

### To delete the table and start over without having to kill the docker container
``` 
$ ACTION=DELETE node ddb_local.js
```
___ 

### Put additional commands for visualizing your access patterns in `shell_commands.js`
