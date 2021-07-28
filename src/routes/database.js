const {Router} = require('express');
const router = Router();
const db = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    setTimeout(
        async () => {
            try {
                const usuarios = await db.Database_Connection.findAll({
                    attributes: {exclude: ['createdAt', 'updatedAt']},
                });
                console.log(JSON.stringify(usuarios));
                res.json(usuarios)
                process.exit();
            } catch (error) {
                res.json(error)
            }
        }, 1500
    )
})

router.post('/', (req, res) => {
    setTimeout(
        async () => {
            try {
                const data = {
                    name: req.body.name,
                    description: req.body.description,
                    port: req.body.port,
                    host: req.body.host,
                    user: req.body.user,
                    password: bcrypt.hashSync(req.body.password, 10)
                }

                db.Database_Connection.create(data)
                    .then((response) => {
                        res.json({status: 'Database ' + response.name + 'REGISTERED'})
                    }).catch(err => {
                    res.send('ERROR: ' + err)
                })
            } catch (error) {
                res.json(error)
            }
        }, 1500
    )
})

router.put('/:id', (req, res) => {
    setTimeout(
        async () => {
            const {id} = req.params
            try {
                const data = {
                    name: req.body.name,
                    description: req.body.description,
                    port: req.body.port,
                    host: req.body.host,
                    user: req.body.user,
                    password: bcrypt.hashSync(req.body.password, 10)
                }

                db.Database_Connection.update(
                    data,
                    {where: {id: id}}
                ).then((response) => {
                    res.status(200).json({message: 'Update successfully' + response.name})
                }).catch(err => {
                    res.send('ERROR: ' + err)
                })
            } catch (e) {
                res.json(e)
            }
        }, 1500)
})

router.delete('/:id', (req, res) => {
    setTimeout(
        async () => {
            const {id} = req.params
            try {
                db.Database_Connection.destroy({
                    where: {id: id}
                }).then((response) => {
                    res.status(200).json({message: 'Delete successfully'})
                }).catch(err => {
                    res.send('ERROR: ' + err)
                })
            } catch (e) {
                res.json(e)
            }
        })
})

module.exports = router