const Controller = require("./controller");
const express = require("express");
const cors = require("express-cors");
const multer = require("multer");

const controller = new Controller();

const app = express();
app.use(
  cors({
    allowedOrigins: ["localhost:8080"]
  })
);

const upload = multer({ dest: __dirname + "/upload" });

app.post("/verify", controller.handleVerifyUpload);

app.post("/merge", controller.handleMerge);

app.post("/uploads", upload.any(), controller.handleFormData);

app.listen(3000, () => console.log("正在监听 3000 端口"));
