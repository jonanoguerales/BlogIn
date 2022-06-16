const express = require("express"); // Iniciar servidor backend
const app = express(); // Iniciar aplicacion en el servidor
const dotenv = require("dotenv"); // Para ocultar credenciales
const mongoose = require("mongoose"); // Para conectar con base de datos
const authRoute = require("./routes/auth"); // Para conectar con base de datos
const usersRoute = require("./routes/users");
const userRoute = require("./routes/user"); // Para conectar con base de datos
const postsRoute = require("./routes/posts");// Para conectar con base de datos
const postRoute = require("./routes/post");
const commentsRoute = require("./routes/comments");
const categoryRoute = require("./routes/categories");// Para conectar con base de datos
const multer = require("multer");
const path = require("path");
const User = require("./models/User");


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Conectado a mongo"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("El archivo a sido subido");
  });

  app.use("/api/auth", authRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/user", userRoute);
  app.use("/api/posts", postsRoute);
  app.use("/api/post", postRoute);
  app.use("/api/categories", categoryRoute);
  app.use("/api/comments", commentsRoute);


app.listen("7000", () => {
    console.log("Bienvenido");
});
