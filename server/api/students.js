'use strict';

const router = require('express').Router(),
      Students = require('../../db/models/student');

module.exports = router;

router.get('/', (req, res, next) => {
  Students.findAll({ include: [{ all: true }] })
    .then(students => res.json(students))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Students.findById(req.params.id)
    .then(students => (!student ? res.sendStatus(404) : res.json(students)))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Students.create(req.body)
    .then(student => res.sendStatus(201))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Students.update(req.body, { where: {id: req.params.id }, returning: true })
    .then(results => {
            const updated = results[1][0];
            res.json({
                message: 'Updated successfully',
                student: updated
            })
          })
    .catch(next);
});

router.delete('/', (req, res, next) => {
  Students.destroy({ where: req.params.id })
    .then(_ => res.sendStatus(204))
    .catch(next);
});
