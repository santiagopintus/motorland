const createServer = require("./server");

const port = process.env.PORT || 3000;
const server = createServer(port);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
