const crud = require('./crud');

const routes = async (fastify) => {
    fastify.get('/', crud.getAllUser);
    fastify.get('/:id', crud.getDataUserById);
    fastify.post('/new', crud.addNewUser);
    fastify.put('/update/:id', crud.updateUserById);
    fastify.delete('/delete/:id', crud.deleteUser);
    fastify.post('/login', crud.login)
}
module.exports = routes;