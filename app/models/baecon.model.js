const db = require('../common/connect');
const Baecon = function(baecon) {
        this.id = baecon.id;
        this.user_id = baecon.user_id;
        this.user_name = baecon.user_name;
        this.beacon_item_name = baecon.beacon_item_name;
        this.time = baecon.time;
        this.major = baecon.major;
        this.minor = baecon.minor;
        this.longitude = baecon.longitude;
        this.latitude = baecon.latitude;
    }
    /**
     * 
     *longitude double DEFAULT NULL,
      latitude double DEFAULT NULL,
      eil_uid VARCHAR(1000) DEFAULT NULL} result 
     */
Baecon.get_all = function(result) {
        db.query("SELECT * FROM osms_tracking", function(err, baecon) {
            if (err) {
                result(err);
            } else {
                result(baecon);
            }

        });

    }
    /**
     * $query = "
        select  a.*
                , b.category_title
        from    (
            ".$query_from."
            ) a
            left outer join 
            bc_category b on a.category_id=b.category_id
        where (a.title not like '%공통%' and b.category_title not like '%공통%') or b.category_title is null
    ";
     */
Baecon.getByName = function(name, result) {
        var db_query = `SELECT A.user_name,B.longitude,B.latitude, B.time,C.beacon_item_name  FROM osms_user as A
                LEFT JOIN osms_tracking as B
                ON B.user_id = A.id
                LEFT JOIN osms_beacon_item as C
                ON C.major = B.major AND C.minor = B.minor
                WHERE user_name = "${name}" `;
        db.query(db_query, function(err, baecon) {
            if (err || baecon.length == 0) {
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

// Baecon.create = function(data, result) {
//         db.query("INSERT INTO book SET ?", data, function(err, baecon) {
//             if (err) {
//                 result(err);
//             } else {
//                 result({ id: baecon.insertId, ...data });
//             }
//         });
//     }
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