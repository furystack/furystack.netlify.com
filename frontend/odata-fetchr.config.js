const fs = require("fs");
const path = require("path");
/**
 * @type import("@furystack/odata-fetchr/dist/models/configuration").Configuration
 */
module.exports = {
  /**
   * Default root path for output
   */
  outputPath: "./src/odata",
  /**
   * In the following example we read it from a persisted example file. You can usually fetch it from your service endpoint.
   */
  getMetadataXml: async () => {
    return new Promise((resolve, reject) =>
      // old - get from HTTP
      // http.get("http://localhost:9090/odata/$metadata", res => {
      //   var data = "";
      //   res.on("data", function(chunk) {
      //     data += chunk;
      //   });
      //   res.on("end", function() {
      //     resolve(data);
      //   });
      // })
      fs.readFile(path.join(__dirname, "..", "metadata.xml"), (err, data) =>
        err ? reject(err) : resolve(data.toString())
      )
    );
  },
  writeDump: true
};
