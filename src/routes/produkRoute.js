const express = require("express");
const router = express.Router();
const produkService = require("../services/produkService");

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
