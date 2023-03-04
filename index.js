// Server'ı buradan başlatın
const server = require("./api/server");

let port = 9000;

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
