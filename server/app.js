import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import helloRouter from "./controllers/index.js";

const app = express();
const PORT = 5000;

app.use(cookieParser());

app.use(
  session({
    secret: "suhail",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Change this according to your environment
  })
);

app.get("/", (req, res) => {
  try {
    req.session.isAuth = true;
    req.session.suhail = "Ali";
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.suhail);

    res.status(200).json({ msg: "Hello" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", (req, res) => {
  try {
    console.log(req.session.suhail);

    res.status(200).json({ msg: "Hello" });
  } catch (error) {
    console.log(error);
  }
});

app.use("/api", helloRouter);

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
