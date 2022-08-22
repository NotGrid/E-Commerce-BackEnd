const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({include: [{model: Product, through: ProductTag}]});
    res.json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, {include: [{model: Product, through: ProductTag}]});
  res.json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const tags = await Tag.create(req.body);
  res.json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tags = await Tag.update(req.body, {where: req.params.id});
    res.json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tags = await Tag.destroy(req.params.id);
  res.json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
