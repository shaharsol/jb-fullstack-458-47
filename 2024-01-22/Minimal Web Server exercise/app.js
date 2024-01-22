require("http")
  .createServer((request, response) => {
    switch (request.method) {
      case "POST":
        response.writeHead(201).end("this was a post request");
        break;
      case "GET":
        switch (request.url) {
          case "/":
            response.writeHead(200).end("homepage");
            break;
          case "/products":
            response.writeHead(200).end("products page");
            break;
          case "/store":
            response.setHeader("Content-Type", "text/html").writeHead(200).end(`
                  <html>
                      <head>
                      </head>
                      <body>
                          <h1>My Store</h1>
                      </body>
                  </html>
              `);
            break;
          case "/kittens":
            const kittens = [
              { id: 1, name: "mitzi", age: 4 },
              { id: 2, name: "kitzi", age: 5 },
              { id: 3, name: "pitzi", age: 6 },
            ];
            response
              .setHeader("Content-Type", "application/json")
              .writeHead(200)
              .end(JSON.stringify(kittens));
            break;
          default:
            response.setHeader("Content-Type", "text/html").writeHead(404).end(`
                  <html>
                      <head>
                      </head>
                      <body>
                          <h1>not found</h1>
                      </body>
                  </html>
              `);
            break;
        }
        break;
    }
  })
  .listen(8080, () => {
    console.log("web server started on http://localhost:8080");
  });
