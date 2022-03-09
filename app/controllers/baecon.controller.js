var Beacon = require('../models/baecon.model');

function access(res) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', "http://127.0.0.1");
    res.setHeader('Access-Control-Allow-Origin', "file: ///D:/Dev/MASTER/HTTT/FE_Baecon/FE_Baecon/index.html");
    //file: ///D:/Dev/MASTER/HTTT/FE_Baecon/FE_Baecon/index.html
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
}
exports.get_list = function(req, res) {
    access(res);

    // Pass to next layer of middleware
    // next();
    Beacon.get_all(function(data) {
        res.send({ result: data });
    });
}

exports.detail = function(req, res) {
        access(res);
        // console.log(res);
        Beacon.getByName(req.params.name, function(data) {
            res.send({ result: data });
        });
    }
    // exports.detail = function(req, res) {
    //     Book.getById(req.params.id, function(data) {
    //         res.send({ result: data });
    //     });
    // }

// exports.add_book = function(req, res) {
//     var data = req.body;
//     Book.create(data, function(response) {
//         res.send({ result: response });
//     });
// }

// exports.delete_book = function(req, res) {
//     var id = req.params.id;
//     Book.delete(id, function(response) {
//         res.send({ result: response });
//     });
// }

// exports.update_book = function(req, res) {
//     var data = req.body;
//     Book.update(data, function(response) {
//         res.send({ result: response });
//     });
// }