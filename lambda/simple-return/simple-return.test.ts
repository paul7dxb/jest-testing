import * as esbuild from "esbuild";
import path from "path";

import { handler } from ".";

describe("Simple Lambda Testing", () => {
	it("bundles without errors", async () => {
		const codepath = path.join(__dirname, "index.ts");

		await esbuild.build({
			entryPoints: [codepath],
			external: ["aws-sdk"],
			platform: "node",
			bundle: true,
			write: false,
		});
	});

	it('responds with "lambdaBody"', async () => {
		const task = handler();
		expect(task).resolves.toHaveProperty("body", "lambdaBody");
	});

	it("returns a successful status code", async () => {
		const response = await handler();

		expect(response).toHaveProperty("statusCode");
		expect(response.statusCode).toBeGreaterThanOrEqual(200);
		expect(response.statusCode).toBeLessThan(300);
	});
});
