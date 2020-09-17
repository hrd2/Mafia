## Set up AWS Resources:

1. Go to your AWS account and create an IAM User.  Hold on to the Key Pair it generates.
2. Give the user the ```AdministratorAccess``` policy.
3. Install the [AWS CLI](https://aws.amazon.com/cli/)
4. Configure your aws config as follows:
    > ~/.aws/config
    ```
    [default]
        region = <Stack Region>
    [user]
        region = <Stack Region>
    ```
   
    > ~/.aws/credentials
    ```
    [default]
        role_arn = arn:aws:iam::<AWS Account ID>:role/MafiaServiceRole
        source_profile = user
    [user]
        aws_access_key_id=<Your IAM User Access Key ID>
        aws_secret_access_key=<Your IAM User Access Secret Key>
   ```
5. Install [Node JS](https://nodejs.org/en/)
6. Install the CDK cli with ```npm install -g aws-cdk```
7. Synthesise the AWS resources in your account: ```cdk --profile user deploy```

## Building and Running

To build the service:

1. Install [Docker](https://www.docker.com/)
2. In this directory, run ```docker build -t mafia .```

To run the docker container:

1. Follow the steps above for configuring AWS permissions
2. Run ```docker run -p 8080:8080 mafia:latest```
3. Navigate to [localhost:8080](http://localhost:8080/)

## Developing

1. Follow the steps above for configuring AWS permissions
2. Load the project in IntelliJ
3. Open ```MafiaApplication.kt``` and hit 'Run' (the Green play button next to the main function)
4. Install [Node JS](https://nodejs.org/en/)
5. Install [Angular CLI](https://angular.io/cli)
6. ```cd frontend```
7. ```ng serve```
8. Navigate to [localhost:4200](http://localhost:4200/)
