const Basket = require("../models/Basket.model");

module.exports.basketController = {
  // ВЫВОД КОРЗИНЫ
  getBasketByUSer: async (req, res) => {
    try {
      const data = await Basket.findOne({ userId: req.user.id });
      // console.log("DATA", req.user.id)
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ
  addProductBasket: async (req, res) => {
    console.log(req.user.id + " 111");
    try {
      const data = await Basket.findOneAndUpdate({userId: req.user.id},
        {
            $addToSet: {
              products: req.body.product,
            },
          },{new:true})
          res.json(data)
    const res = await Basket.find()
      // const data = await Basket.findByIdAndUpdate(req.params.id, {
      //   $addToSet: {
      //     products: req.body.product,
      //   },
      // },{new:true});
      res.json(res);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
  deleteBasket: async (req, res) => {
    try {
      const data = await Basket.findByIdAndUpdate(req.user.basket, {
        $pull: {
          products: { productId: req.params.id },
        },
      });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
