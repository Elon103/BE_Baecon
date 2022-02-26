module.exports = function(router) {
    var baeconController = require('../controllers/baecon.controller');
    router.get('/baecon/list', baeconController.get_list);
    router.get('/baecon/detail/:name', baeconController.detail);
    // router.post('/baecon/add', baeconController.add_baecon);
    // router.delete('/book/delete/:id', bookController.delete_book);
    // router.put('/book/update', bookController.update_book);
}