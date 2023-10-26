import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { LambdaFunction } from "aws-cdk-lib/aws-events-targets";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

class LambdaStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		const simpleLambda = new lambda.Function(this, "simpleLambda", {
			runtime: lambda.Runtime.NODEJS_18_X,
			// runtime: lambda.Runtime.NODEJS_14_X,  // Use this runtime to fail nodejs version test
			handler: "index.handler",
			code: lambda.Code.fromAsset(`./lambda/simple-return`),
			memorySize: 128,
			timeout: Duration.seconds(5),
		});
	}
}

export default LambdaStack