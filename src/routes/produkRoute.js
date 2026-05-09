// routes/produkRoute.js
const express = require("express");
const router = express.Router();
const produkService = require("../services/produkService");

// GET /course - List semua produk/kelas
router.get("/", async (req, res) => {
  try {
    const data = await produkService.getAllProduk();
    res.status(200).json({
      status: "success",
      message: "Berhasil mengambil semua data produk",
      data: data,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// GET /course/:id - Tampilkan satu produk berdasarkan id
router.get("/:id", async (req, res) => {
  try {
    const data = await produkService.getProdukById(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({ status: "error", message: "Data produk tidak ditemukan" });
    }
    res.status(200).json({
      status: "success",
      message: "Berhasil mengambil data produk",
      data: data,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// PATCH /course/:id - Update data produk berdasarkan id
router.patch("/:id", async (req, res) => {
  try {
    const result = await produkService.updateProduk(req.params.id, req.body);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Data produk tidak ditemukan" });
    }
    res.status(200).json({
      status: "success",
      message: "Berhasil mengubah data produk",
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// DELETE /course/:id - Hapus data produk berdasarkan id
router.delete("/:id", async (req, res) => {
  try {
    const result = await produkService.deleteProduk(req.params.id);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Data produk tidak ditemukan" });
    }
    res.status(200).json({
      status: "success",
      message: "Berhasil menghapus data produk",
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// POST /course - Tambah data produk baru
router.post("/", async (req, res) => {
  try {
    const result = await produkService.addProduk(req.body);
    res.status(201).json({
      status: "success",
      message: "Berhasil menambahkan data produk",
      data: { id: result.insertId },
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

module.exports = router;
