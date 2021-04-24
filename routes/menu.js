const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu_item');
const crypto = require('crypto');

router.get('/', async (req, res) => {
  console.log('Menu page opened');
  const menuItem = await MenuItem.find({});
  res.render('menu', { req: req, menu_item: menuItem });
});

router.get('/:itemID', async (req, res) => {
  const currentMenuItem = await MenuItem.findOne({
    itemID: req.params.itemID,
  });
  console.log(currentMenuItem);
  console.log('Menu Item', currentMenuItem.itemName, 'is being viewed');
  res.render('viewMenuItem', { req: req, menuItem: currentMenuItem });
});

router.get('/createMenuItem', async (req, res) => {
  console.log('Create Menu Item page');
  res.render('createMenuItem', { req: req, errorMessage: '' });
});

router.post('/createMenuItem', async (req, res) => {
  console.log('Menu Item being created:');
  const newMenuItem = new MenuItem({
    itemID: crypto.randomBytes(6).toString('hex'),
    isItFood: req.body.isItFood,
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
    itemDescription: req.body.itemDescription,
    itemIngredients: req.body.itemIngredients,
    mealType: req.body.mealType,
    veganScum: req.body.veganScum,
    glutenFree: req.body.glutenFree,
    nutFree: req.body.nutFree,
    vegetarian: req.body.vegetarian,
    dairyFree: req.body.dairyFree,
  });
  console.log(newMenuItem);
  try {
    await newMenuItem.save();
    const menuItem = await MenuItem.find({});
    res.redirect('/menu');
  } catch (e) {
    console.log(e);
    res.render('createMenuItem', {
      req: req,
      errorMessage: 'Please make sure you filled in all the necessary sections',
    });
  }
});

module.exports = router;
