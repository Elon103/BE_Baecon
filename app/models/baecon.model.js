const db = require('../common/connect');
const Baecon = function(baecon) {
        this.id = baecon.id;
        this.name = baecon.name;
        this.longitude = baecon.longitude;
        this.latitude = baecon.latitude;
        this.eil_uid = baecon.eil_uid;
    }
    /**
     * 
     *longitude double DEFAULT NULL,
      latitude double DEFAULT NULL,
      eil_uid VARCHAR(1000) DEFAULT NULL} result 
     */
Baecon.get_all = function(result) {
    db.query("SELECT * FROM osms_beacon", function(err, baecon) {
        if (err) {
            result(err);
        } else {
            result(baecon);
        }

    });

}

// Book.getById = function(id, result) {
//     db.query("SELECT * FROM book WHERE id = ?", id, function(err, book) {
//         if (err || book.length == 0) {
//             result(null);
//         } else {
//             result(book[0]);
//         }

//     });
// }

// Book.create = function(data, result) {
//     db.query("INSERT INTO book SET ?", data, function(err, book) {
//         if (err) {
//             result(err);
//         } else {
//             result({ id: book.insertId, ...data });
//         }
//     });
// }

// Book.delete = function(id, result) {
//     db.query("DELETE FROM book WHERE id = ?", id, function(err, book) {
//         if (err) {
//             result(null);
//         } else {
//             result("Xoa dữ liệu Book có id " + id + " thành công");
//         }

//     });
// }

// Book.update = function(b, result) {
//     db.query("UPDATE book SET name=?, image=?,author_id=? WHERE id=?", [b.name, b.image, b.author_id, b.id], function(err, book) {
//         if (err) {
//             result(err);
//         } else {
//             result(b);
//         }
//     });
// }
module.exports = Baecon;