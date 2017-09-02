const Request = require('../models/request');

exports.getAll = (req, res) => {
  Request.findAll({
    order: [['id', 'DESC']],
    limit: 20
  }).then(requests => {
    res.send(requests.map(request => request.toJSON()));
  });
}

exports.get = (req, res) => {
  Request.findById(req.params.id).then(request => {
    request !== null ? res.send(request.toJSON()) : res.send(404);
  });
};
