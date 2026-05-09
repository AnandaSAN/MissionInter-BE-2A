// services/produkService.js
const db = require("../config/database");

// SELECT semua data produk
const getAllProduk = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT p.*, k.nama_kategori, t.nama_tutor 
      FROM produk p
      LEFT JOIN kategori k ON p.kategori_id = k.id
      LEFT JOIN tutor t ON p.tutor_id = t.id
    `;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// SELECT data produk by id
const getProdukById = (id) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT p.*, k.nama_kategori, t.nama_tutor 
      FROM produk p
      LEFT JOIN kategori k ON p.kategori_id = k.id
      LEFT JOIN tutor t ON p.tutor_id = t.id
      WHERE p.id = ?
    `;
    db.query(query, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

// UPDATE data produk by id
const updateProduk = (id, data) => {
  return new Promise((resolve, reject) => {
    const { judul, deskripsi, harga, foto, tutor_id, kategori_id } = data;
    const query = `
      UPDATE produk 
      SET judul = ?, deskripsi = ?, harga = ?, foto = ?, tutor_id = ?, kategori_id = ?, updated_at = NOW()
      WHERE id = ?
    `;
    db.query(
      query,
      [judul, deskripsi, harga, foto, tutor_id, kategori_id, id],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      },
    );
  });
};

// DELETE data produk by id
const deleteProduk = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM produk WHERE id = ?";
    db.query(query, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// INSERT data produk baru
const addProduk = (data) => {
  return new Promise((resolve, reject) => {
    const { judul, deskripsi, harga, foto, tutor_id, kategori_id } = data;
    const query = `
      INSERT INTO produk (judul, deskripsi, harga, foto, tutor_id, kategori_id, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;
    db.query(
      query,
      [judul, deskripsi, harga, foto, tutor_id, kategori_id],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      },
    );
  });
};

module.exports = {
  getAllProduk,
  getProdukById,
  updateProduk,
  deleteProduk,
  addProduk,
};
