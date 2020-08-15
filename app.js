const connectToDb=require("./helper/db");
const express=require("express")
const router=require("./router/index")
connectToDb();


const app =express();
app.use("/api",router)
app.listen(5000,()=>{

    console.log("App Started on ",5000," status ");
})



const path=require("path");
app.use(express.static(path.join(__dirname,"public")))
