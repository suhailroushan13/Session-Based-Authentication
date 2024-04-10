import express from "express";
const router = express.Router();

router.get("/hello", (req, res) => {
  try {
    console.log(req.session.suhail);
    res.status(200).json({ msg: req.session.suhail });
  } catch (error) {
    console.log(error);
  }
});

export default router;
