import LambdaStack from "@lib/lambda-stack";
import { App, Stack } from "aws-cdk-lib";
import { SynthUtils } from "@aws-cdk/assert";
import * as lambda from "aws-cdk-lib/aws-lambda";
import "@aws-cdk/assert/jest";

let app: App;

beforeEach(() => (app = new App()));

beforeEach(() => {
	const stack = new Stack(app, "test-stack");
});

describe("Lambda Stack", () => {

it("synths without errors", () => {
	const stack = new LambdaStack(app, "lambda-stack");
	SynthUtils.toCloudFormation(stack);
});

it("has one lambda function", () => {
	const stack = new LambdaStack(app, "timekeeper-stack");
	const lambdas = stack.node.children.filter(
		(child) => child instanceof lambda.Function
	);

	expect(lambdas).toHaveLength(1);
});

it("lambda uses the nodejs v18.x runtime", () => {
	const stack = new LambdaStack(app, "timekeeper-stack");
	const template = SynthUtils.toCloudFormation(stack);

	expect(template).toHaveResource("AWS::Lambda::Function", {
		Runtime: "nodejs18.x",
	});
});

})