const User = require("../models/Users.model");

module.exports.walletControler = {
    getBalance: async (req, res) => {
        try {
            const balance = await User.findOne({_id: req.user.id})
            res.json(balance.walletAmount)
        } catch (error) {
            res.json({error: error.message})
        }
    },
    addingMoney: async (req, res) => {
        try {
            const { walletAmount } = req.body
            const user = await User.findById(req.user.id)
            const wallet = await User.findByIdAndUpdate(req.user.id, {
                walletAmount: user.walletAmount + walletAmount
            })
            res.json(wallet)
            // const currentWallet = await User.findById(req.user.id).walletAmount
            // console.log(req.user);
            // const wallet = await User.findByIdAndUpdate(req.user.id, {
            //     walletAmount: walletAmount + walletAmount
            // })
            // res.json(wallet)
        } catch (error) {
            res.json({error: error.message})
        }
    },
}