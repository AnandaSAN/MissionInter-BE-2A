// config/database.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost", // ganti sesuai host kamu
  user: "root", // ganti sesuai username kamu
  password: "", // ganti sesuai password kamu
  port: 3306, // ganti sesuai port kamu
  database: "video_course", // nama database
});

db.connect((err) => {
  if (err) {
    console.error("Koneksi database gagal:", err.message);
    return;
  }
  console.log("Berhasil terhubung ke database video_course!");
});

module.exports = db;
