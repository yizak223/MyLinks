const { User } = require("../models/users.model");

const register = async (req, res) => {
    const body = req.body;
    try {
        const newUser = new User(body);
        await newUser.save();
        res.send({ msg: 'Welcome User', newUser });
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}
const logIn = async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findOne({ Email: body.Email, Password: body.Password });
        res.send({ msg: 'Hello', user });
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id)
        res.send({ msg: 'User deleted' })
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}
const editUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        await User.findByIdAndUpdate(id, body)
        res.send({ msg: 'User updated' })
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}
module.exports = { register, logIn, deleteUser, editUser }