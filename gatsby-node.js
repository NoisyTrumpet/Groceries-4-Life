const { copyLibFiles } = require("@builder.io/partytown/utils");
const path = require("path");
// Partytown Prebuild
exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));
};
