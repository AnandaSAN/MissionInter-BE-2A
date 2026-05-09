const db = require("../config/database");

const getAllKategori = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM tutor";
    db.query(query, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  getAllKategori,
};