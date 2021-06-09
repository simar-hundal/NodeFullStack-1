
const cors= require("cors")
const express= require("express")
const app = express();

app.use(cors({origin:'http://localhost:9000'}))
const initRoutes = require('./src/routes/index')

initRoutes(app);

let port=9000;
app.listen(port,()=>{
    console.log(`Running locahost  : ${port}` );
})
