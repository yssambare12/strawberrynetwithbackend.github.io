const app = require("./index");
const connect = require("./configs/db");
app.listen(process.env.PORT || 4000, async function () {
  await connect();
  console.log("Listening on port 4000");
});
