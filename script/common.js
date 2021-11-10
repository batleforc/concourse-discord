import * as stdin from "get-stdin";
/**
 * This function simply parses STDIN to JSON
 */
async function getStdinAsJson() {
  var result;
  console.log(stdin);
  try {
    result = JSON.parse(await stdin());
  } catch (err) {
    console.error("Error thrown during parsing stdin!");
    throw err;
  }
  return result;
}

function getColor(value) {
  switch (String(value).toLowerCase()) {
    case "success":
      return "#1A4314";
    case "failed":
    case "errored":
    case "aborted":
      return "#800000";
    default:
      return "#FFFFFF";
  }
}

exports.getStdinAsJson = getStdinAsJson;
exports.getColor = getColor;
