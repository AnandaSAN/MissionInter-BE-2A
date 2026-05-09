// index.js
const express = require("express");
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Import Routes
const produkRoute = require("./routes/produkRoute");
const kategoriRoute = require("./routes/kategoriRoute");
const tutorRoute = require("./routes/tutorRoute");

// Register Routes
app.use("/course", produkRoute); // Endpoint utama sesuai referensi
app.use("/kategori", kategoriRoute);
app.use("/tutor", tutorRoute);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to EduCourse API",
    endpoints: {
      course: "/course",
      kategori: "/kategori",
      tutor: "/tutor",
    },
  });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
