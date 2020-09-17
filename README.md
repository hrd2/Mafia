## Set up AWS Resources:

  > todo: fill this section in when the CDK build is added

## Building and Running

To build the service:

1. Install [Docker](https://www.docker.com/)
2. In this directory, run ```docker build -t mafia .```

To run the docker container:

1. Configure your machine with AWS permissions
    - Create an IAM User for yourself
        - Save the Key Pair
        - Grant STS:AssumeRole permissions on the Service Role
        ```arn:aws:iam::<AWS Account ID>:role/MafiaServiceRole```
    - Update your aws config as follows:
    
    > ~/.aws/config
    ```
    [default]
        region = <Stack Region>
    [profile user]
        region = <Stack Region>
    ```
   
    > ~/.aws/credentials
    ```
    [default]
        role_arn = arn:aws:iam::<AWS Account ID>:role/MafiaServiceRole
        source_profile = user
    [profile user]
        aws_access_key_id=<Your IAM User Access Key ID>
        aws_secret_access_key=<Your IAM User Access Secret Key>
   ```

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
