const Response = require("../models/Response.model");

module.exports.responseController = {
  postResponse: async (req, res) => {
    try {
        console.log(req.body);
      const { name, email, phone, commit } = req.body;
      const response = await Response.create({
        name,
        email,
        phone,
        commit,
      })
      res.json(response)
    } catch (error) {
        res.json({ error: error.message })
    }
  },

  getAllResponse: async (req, res) => {
    try {
        const response = await Response.find()
        res.json(response)
    } catch (error) {
        res.json({ error: error.message })
    }
  }
};
