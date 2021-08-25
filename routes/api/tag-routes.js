const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne(
    {
      where: {
        id: req.params.id
      },
    }
  ).then((tagFind) => {
    res.json(tagFind)
  })
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then((newTag) => {
      res.join(newTag)
    })
    .catch((err) => {
      res.json(err)
    })
});

router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  Tag.destroy(
    {
      where: {
        id: req.params.id
      },
    }
  )
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err))
});

module.exports = router;
