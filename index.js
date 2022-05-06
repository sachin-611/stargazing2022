const express = require("express");
// creating our server
const app = express();
const server = require("http").Server(app);
const path = require("path");
const port = process.env.PORT || 8080;
// setting ejs as our view engine for rendering pages
app.set("view engine", "ejs");
// setting public as static files
app.use(express.static(path.join(__dirname, "public")));

// telling express for using urlencoder
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render("home")
})
app.get('/form',(req,res)=>{
    res.render("form")
})
app.get('/team',(req,res)=>{
    res.render("team",{list:[
        {title:"Secretary",ppl:[{name:"Sachin Choudhary",gender:"M"},{name:"Arvind Kumar",gender:"M"}]},
        {title:"Joint Secretary",ppl:[{name:"Anurag Singh",gender:"M"},{name:"Promod Jyani",gender:"M"},{name:"Nikita Pal",gender:"F"},{name:"Khusbhu",gender:"F"}]},
        {title:"Members",ppl:[{name:"",gender:""}]}],
        gender:{"M":"https://cdn-icons-png.flaticon.com/512/3667/3667289.png",
        "F":"https://cdn-icons-png.flaticon.com/512/949/949635.png"}
})
})
app.get('/contact',(req,res)=>{
    res.render("contact",{list:[
        {name:"Sachin Choudhary",phone:"6377868494",email:"sachinchoudhary_19151@aitpune.edu.in"},
        {name:"Arvind Kumar",phone:"8824522391 ",email:"arvindkumar_19099@aitpune.edu.in"},
        {name:"Anurag singh",phone:"6395020131",email:"anuragsingh_20944@aitpue.edu.in"},
        {name:"pramod jyani",phone:"7375026275",email:"pramodjyani_20256@aitpune.edu.in"},
        {name:"Nikhita pal",phone:"6386684904",email:"nikhitapal_20376@aitpune.edu.in"},
        {name:"Khushbu",phone:"7082530482",email:"khushbu_20348@aitpune.edu.in"}]
})
})

server.listen(port,()=>{
    console.log("listening to %d",port)
});