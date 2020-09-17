import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';

export class MafiaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new iam.Role(this, 'MafiaServiceRole', {
      assumedBy: new iam.AccountPrincipal(cdk.Aws.ACCOUNT_ID),
      description: 'Main Service Role for the Mafia application',
      roleName: 'MafiaServiceRole'
    });
  }
}
