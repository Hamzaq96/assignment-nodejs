const axios = require("axios");

const getUsers = async (req,res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        res.status(200).json(users);
    } catch(error) {
        res.status(404).json({ error: "Users not found" });
    }
}

const getUserByID = async (req,res) => {
    try{
        userID = req.params.id;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
        const user = response.data;
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ error: "User not found" });
    }
}

module.exports = {getUsers, getUserByID};