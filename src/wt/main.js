import { Worker } from "worker_threads";
import os from "os";

const runWorker = (workerData) => {
	return new Promise((resolve, reject) => {
		const worker = new Worker("./src/wt/worker.js", { workerData });

		worker.on("message", (data) => {
			resolve({ status: "resolved", data });
		});

		worker.on("error", () => {
			reject({ status: "error", data: null });
		});
	});
};

const performCalculations = async () => {
	const cores = os.cpus();
	const workers = cores.map((_, i) => runWorker(10 + i));

	const results = await Promise.allSettled(workers);

	console.log(results.map((r) => r.value));
};

await performCalculations();
