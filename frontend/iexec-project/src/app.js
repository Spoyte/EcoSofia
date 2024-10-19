const fsPromises = require("fs").promises;

(async () => {
  try {
    const iexecOut = process.env.IEXEC_OUT;
    // Do whatever you want (let's write hello world here)
    const message = process.argv.length > 2 ? process.argv[2] : "World";

    const text = `Hello, ${message}!`;
    console.log(text);
    // Append some results in /iexec_out/
    await fsPromises.writeFile(`${iexecOut}/result.txt`, text);
    // Declare everything is computed
    const computedJsonObj = {
      "deterministic-output-path": `${iexecOut}/result.txt`,
    };
    await fsPromises.writeFile(
      `${iexecOut}/computed.json`,
      JSON.stringify(computedJsonObj)
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();