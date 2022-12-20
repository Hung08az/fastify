const fastify = require('fastify')();

const { user } = require('../helloworld/models/user');
const { connect } = require('./config/db');
const cors = require("@fastify/cors");
const routes = require('./routes/crudRouter');


fastify.register(cors, {
  origin: "*",
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Accept",
    "Content-Type",
    "Authorization",
  ],
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
});
fastify.register(routes);
const startServer = async () => {
  try {
    await fastify.listen(3000, (err, port) => {
      if (err) return err;
      console.log(`Server is running on ${port}`);
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
startServer();