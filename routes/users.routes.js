const { Router } = require('express')
const router = Router()
const { User } = require('../models/users.model')
const { register, logIn, deleteUser, editUser } = require('../controllers/user.controllers')

let users = []
router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        return res.send({ users })
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
})

router.post('/register', register)

router.post('/login', logIn)

router.delete('/:id', deleteUser)

router.patch('/:id', editUser)
module.exports = router