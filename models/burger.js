var orm = require("../config/orm");

var burger = {
    getAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objVals, condition, cb){
        orm.updateOne("burgers", objVals, condition, function(res){
            cb(res);
        });
    },

};
module.exports = burger;