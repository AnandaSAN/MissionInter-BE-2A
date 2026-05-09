const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  port: 3306, 
  database: "video_course",
});

db.connect((err) => {
  if (err) {
    console.error("Koneksi database gagal:", err.message);
    return;
  }
  console.log("Berhasil terhubung ke database video_course!");
});

module.exports = db;
