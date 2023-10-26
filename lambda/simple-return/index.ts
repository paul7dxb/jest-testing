import { Handler } from "aws-cdk-lib/aws-lambda";

export const handler: LambdaAsyncFunctionHandler<ApiResponse> = async () => {
	return {
		statusCode: 200,
		body: "lambdaBody",
	};
};
