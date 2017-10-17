'use strict';

const router = require('express').Router(),
      Campus = require('../../db/models/campus');

module.exports = router;

router.get('/', (req, res, next) => {
  Campus.findAll({ include: [{ all: true }] })
    .then(campus => res.json(campus))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(campus => (!campus ? res.sendStatus(404) : res.json(campus)))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.sendStatus(201))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Campus.update(req.body, { where: {id: req.params.id }, returning: true })
    .then(results => {
            const updated = results[1][0];
            res.json({
                message: 'Updated successfully',
                campus: updated
            })
          })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Campus.destroy({ where: req.params.id })
    .then(_ => res.sendStatus(204))
    .catch(next);
});
