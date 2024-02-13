const { Router } = require('express')
const router = Router()
const { Link } = require('../models/links.model')

let links = []

//http://localhost:3100/api/v1/links/?UserId=65c9f0e87a6cf06b926e461f
router.get('/', async (req, res) => {
    try {
        const query = req.query;
        const links = await Link.find({ ...query })
        return res.send({ links })
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const link = await Link.findById(id)
        return res.send(  link )
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
})
router.post('/', async (req, res) => {
    const body = req.body
    try {
        console.log(body)
        const newLink = new Link(body)
        await newLink.save()
        return res.send({ msg: 'Link created', newLink })
    } catch (err) {
        console.log(err);
        res.status(400).res.send(err);
    }
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Link.findByIdAndDelete(id)
        return res.send({ msg: 'Link deleted' })
    } catch (err) {
        console.log(err);
        res.status(400).res.send(err);
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        await Link.findByIdAndUpdate(id, body)
        return res.send({ msg: 'Link updated' })
    } catch (err) {
        console.log(err);
        res.status(400).res.send(err);
    }
})
module.exports = router