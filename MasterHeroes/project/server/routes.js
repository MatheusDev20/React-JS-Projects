const {Router} = require('express');
const playerController = require('./controllers/playerController');
const routes = Router();

routes.get('/', (req,res) => {
    res.send('Ola')
})
routes.get('/player', playerController.getPlayers)
routes.post('/player', playerController.savePlayer)

module.exports = routes
