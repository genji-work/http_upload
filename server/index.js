const Controller = require("./controller");
const express = require("express");
const cors = require("express-cors");
const multer = require("multer");
const controller = new Controller();
const app = express();

// 支持跨域
app.use(
  cors({
    allowedOrigins: ["localhost:8080", "localhost:8081"]
  })
);

const upload = multer({ dest: __dirname + "/upload" });

app.post("/verify", controller.handleVerifyUpload);

app.post("/merge", controller.handleMerge);

app.post("/uploads", upload.any(), controller.handleFormData);

app.get("/range", controller.handleDownload);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
