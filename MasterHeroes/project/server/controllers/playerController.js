
const Player = require('../models/Player');

module.exports = {
    // Listar todos os players cadastrados 
    async getPlayers(req,res) {
        const players = await Player.find()
        return res.json(players)
    },
    async savePlayer(req,res) {
        const nickname = req.body.nickname
        console.log(nickname);
       if(req.body.nickname == undefined || req.body.nickname.length == 0) {
           return res.status(400).send('Por favor informe um nickname')
       }
        let nick = await Player.findOne({
            nickname
        })
        if(nick) {
           res.status(400).send('Nickname ja existe')
           return
        }
         nick = await Player.create({
            nickname: nickname
        })
        return res.json(nick)

    }
}