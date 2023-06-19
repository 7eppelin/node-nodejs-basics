import cp from "child_process";

const SCRIPT_PATH = "./src/cp/files/script.js";

const spawnChildProcess = async (args) => {
	cp.fork(SCRIPT_PATH, args);
};

spawnChildProcess(["asd", "asdasd", 222]);
