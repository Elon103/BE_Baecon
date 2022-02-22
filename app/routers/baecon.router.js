module.exports = function(router) {
    var baeconController = require('../controllers/baecon.controller');
    router.get('/baecon/list', baeconController.get_list);
    // router.get('/book/detail/:id', bookController.detail);
    // router.post('/book/add', bookController.add_book);
    // router.delete('/book/delete/:id', bookController.delete_book);
    // router.put('/book/update', bookController.update_book);
}