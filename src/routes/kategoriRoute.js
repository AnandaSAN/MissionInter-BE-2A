// routes/kategoriRoute.js
const express = require("express");
const router = express.Router();
const kategoriService = require("../services/kategoriService");

// GET /kategori - List semua Kategori
router.get("/", async (req, res) => {
  try {
    const data = await kategoriService.getAllKategori();
    res.status(200).json({
      status: "success",
      message: "Berhasil mengambil semua data kategori",
      data: data,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await kategoriService.getKategoriById(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({ status: "error", message: "Data kategori tidak ditemukan" });
    }
    res.status(200).json({
      status: "success",
      message: "Berhasil mengambil data kategori",
      data: data,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  } 
})

router.post("/", async (req, res) => {
  try {
    const data = await kategoriService.addKategori(req.body);
    res.status(201).json({
      status: "success",
      message: "Berhasil menambahkan data kategori",
      data: { id: result.insertId },
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const result = await kategoriService.updateKategori(req.params.id, req.body);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Data kategori tidak ditemukan" });
    }
    res.status(200).json({
      status: "success",
      message: "Berhasil mengubah data kategori",
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await kategoriService.deleteKategori(req.params.id);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Data kategori tidak ditemukan" });
    }
    res.status(200).json({
      status: "success",
      message: "Berhasil menghapus data kategori",
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

module.exports = router;
