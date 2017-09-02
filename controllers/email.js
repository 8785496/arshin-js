const Email = require('../models/email');

exports.getAll = (req, res) => {
  Email.findAll({
    order: [['id', 'DESC']],
    limit: 20
  }).then(emails => {
    res.send(emails.map(email => email.toJSON()));
  });
}

exports.get = (req, res) => {
  Email.findById(req.params.id).then(email => {
    email !== null ? res.send(email.toJSON()) : res.send(404);
  });
};