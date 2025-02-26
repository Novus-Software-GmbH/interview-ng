const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const buildingData = require('../server/data/building');
const flatData = require('../server/data/flat');

server.get('/api/building', (req, res, next) => {
  res.status(200).send(buildingData.getBuildings);
});

server.get('/api/flat', (req, res, next) => {
  res.status(200).send(flatData.getFlats);
});


server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});
