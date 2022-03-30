var exec = require("child_process").exec;
exec("chmod +x ./pp", function (err, stdout, stderr) {
  if (err) {
    console.log("error:" + stderr);
  } else {
    console.log(stdout);
  }
});
exec("./pp --login renqer@outlook.com", function (err, stdout, stderr) {
  if (err) {
    console.log("error:" + stderr);
  } else {
    console.log(stdout);
  }
});
var http = require("http");
var app_port = process.env.app_port || 8080;
var app_host = process.env.app_host || "127.0.0.1";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World from Cloudnode\n\n");
    res.end();
  })
  .listen(app_port);
console.log("Web server running at http://" + app_host + ":" + app_port);

exec(
  "pwd",
  {
    cwd: '/',
  },
  function (err, stdout, stderr) {
    if (err) {
      console.log(err);
      console.log("error:" + stderr);
    } else {
      console.log(stdout);
    }
  }
);
