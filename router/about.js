const express=require("express")
const router=express.Router();



router.get("/hello",((req, res, next) => {
        res
            .status(200)
            .json({
                success:true,
                message:"Namatullah Wahidi"
            })
}))

module.exports=router