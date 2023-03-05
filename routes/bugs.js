const router = require('express').Router();
let Bug = require('../models/bug.model');

router.route('/').get((req, res) => {
  Bug.find()
    .then(bugs => res.json(bugs))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Bug.findById(req.params.id)
    .then(bug => res.json(bug))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const newBug = new Bug(req.body);

  newBug.save()
    .then(() => res.json('Bug added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Bug.findByIdAndDelete(req.params.id)
    .then(() => res.json('Bug deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Bug.findById(req.params.id)
    .then(bug => {
      bug.title = req.body.title;
      bug.description = req.body.description;
      bug.priority = req.body.priority;
      bug.status = req.body.status;
      bug.createdBy = req.body.createdBy;
      bug.save()
      .then(() => res.json('Bug updated!'))
      .catch(err => res.status(400).json(`Error: ${err}`));
  })
  .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;  
