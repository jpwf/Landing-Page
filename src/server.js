const express = require("express")
const LP = express()

LP.use(express.static("public"))

LP.use(express.urlencoded({
    extended: true
}))

const nunjucks = require("nunjucks")
nunjucks.configure("src/pages", {
    express:LP,
    noCache: true,
    watch: true

})
LP.get("/", (req,res) =>{
    return res.render("index.html")
})

const port = 3000
LP.listen(port, () =>{
    console.log(`Server running on port: ${port}`)
})
