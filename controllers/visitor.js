const Visitor = require('../models/visitor');

exports.getAll = function(req, res) {
    let cur = new Date();
    Visitor.findAll({
        order: [['id', 'DESC']],
        where: {
            time: {$gte: new Date(cur.getFullYear(), cur.getMonth(), cur.getDate())}
        }
    }).then(visitors => {
        res.send(visitors.map(visitor => visitor.toJSON()));
    });
};

exports.get = function(req, res) {
    Visitor.findById(req.params.id).then(visitor => {
        visitor !== null ? res.send(visitor.toJSON()) : res.send(404);
    });
};