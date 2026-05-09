const db = require("../config/database");

const getAllKategori = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM kategori";
    db.query(query, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

const getKategoriById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM kategori WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result[0]);
    })
  })
}

const addKategori = (data) => {
  return new Promise((resolve, reject) => {
    const { nama_kategori } = data;
    const query = "INSERT INTO kategori (nama_kategori) VALUES (?)";
    db.query(query, [nama_kategori], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

const updateKategori = (id, data) => {
  return new Promise((resolve, reject) => {
    const { nama_kategori } = data;
    const query = "UPDATE kategori SET nama_kategori = ? WHERE id = ?";
    db.query(query, [nama_kategori, id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

const deleteKategori = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM kategori WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

module.exports = {
  getAllKategori,
  getKategoriById,
  addKategori,
  updateKategori,
  deleteKategori
}