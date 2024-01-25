require("http")
  .createServer((request, response) => {
    response.writeHead(200).end("hello from your minimal web server");
  })
  .listen(8080, () => {
    console.log("web server started on http://localhost:8080");
  });
