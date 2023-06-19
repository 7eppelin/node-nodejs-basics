import { Transform, pipeline } from "stream";

const transform = async () => {
	const reverse = new Transform({
		transform(chunk, encoding, callback) {
			const reversed = chunk.toString().split("").reverse().join("");
			callback(null, reversed);
		},
	});

	pipeline(process.stdin, reverse, process.stdout, (err) => {});
};

await transform();
