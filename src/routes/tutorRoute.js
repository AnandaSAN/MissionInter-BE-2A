const express = require("express");
const router = express.Router();
const tutorService = require("../services/tutorService");

router.get("/", async (req, res) => {
  try {
    const data = await tutorService.getAllKategori();
    res.status(200).json({
      status: "success",
      message: "Berhasil mengambil semua data kategori",
      data: data,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

module.exports = router;