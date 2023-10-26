import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import LambdaStack from "./lambda-stack";

export class JestTestingStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);
		new LambdaStack(this, "LambdaStack");
	}
}
