const Visitor = require('../models/visitor');

exports.index = function(req, res) {
    Visitor.findAll({ limit: 20, order: [['id', 'DESC']] }).then(visitors => {
        res.send(visitors.map(visitor => visitor.toJSON()));
    });
};