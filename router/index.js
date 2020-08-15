const express=require("express");
const about=require("./about")
const router=express.Router();

router.use("/about",about);


module.exports=router;
