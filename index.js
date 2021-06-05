
// -- REST - Rep.. State Transfer  JSON {}
// -- SOAP -> Simple object access protocol XML

const { request, response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

//contenet from body String (Plain Text)

let person =[
    {
        id:1,
        name:"Dheeraj",
        age:30,
        contact:"9718910927",
        address:"India"
    }
    , {
        id:2,
        name:"Ramit",
        age:25,
        contact:"12345678932",
        address:"UAE"
    }
]
// this was default
app.get('/', (req,res)=>{
    res.send('<h1>This is my express code<h1/>')
})
// api person
app.get('/api/person', (req,res)=>{
    res.json(person)
})


// swagger documentation {}
app.get('/api/person/:id', (req,resp)=>{
    const id = req.params.id
    const p = person.find(per=>per.id.toString() === id)
   // console.log(typeof person)
    // console.log(p)
    if(p){
        resp.json(p)
    }else{
        resp.status(404).end()
    }
});



app.delete('/api/person/:id',(req,resp)=>{
    const id= Number(req.params.id)
    person =  person.filter(p=>p.id!==id) //
    resp.status(204).end()
})

// {
//     name:"someName"
//     age:23
//     contact:"4343434"
//     address:"India"
// }

const generateId=()=>{
    const maxId =  person.length>0?Math.max(...person.map(num=>num.id)):0
    return maxId+1
}
app.post('/api/person',(req,resp)=>{

    const body = req.body

//console.log("Body",body)
    const personR ={
        id:generateId(),
        name:body.name,
        age:Number(body.age),
        contact:body.contact,
        address:body.address
    }

    person.push(personR)
    resp.json(personR)

    console.log(person)
})

const PORT = 9000
app.listen(PORT,()=>{
    console.log(`Server started at port : ${PORT}`)
})