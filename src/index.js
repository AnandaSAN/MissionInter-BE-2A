const express = require("express");
const app = express();

app.use(express.json());

const produkRoute = require("./routes/produkRoute");
const kategoriRoute = require("./routes/kategoriRoute");
const tutorRoute = require("./routes/tutorRoute");

app.use("/course", produkRoute); // Endpoint utama sesuai referensi
app.use("/kategori", kategoriRoute);
app.use("/tutor", tutorRoute);

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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
