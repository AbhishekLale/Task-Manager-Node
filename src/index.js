const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')


const app = express()
const port = process.env.PORT

// app.use((req,res,next)=> {
//     if(req.method == "GET"){
//         res.send('get requests are disable')
//     }
//     else{
//         next()
//     }
// })  

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=> {
    console.log('server is on port '+ port)
})

// app.use((req,res)=> {
//     res.status(503).send("under maintainance")
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req,file,cb) {
//         if( !file.originalname.match(/\.(doc|docx)$/ )){
//             return cb(new Error('file must be a word document'))
//         }
//         cb(undefined,true)
//     }
// })
// const errorMiddleware = (req,res,next)=> {
//     throw new Error('from my middleware')
// }

// app.post('/upload',upload.single('upload'), (req,res)=> {
//     res.send()
// },(error,req,res,next)=> {
//     res.status(400).send({error: error.message})
// })

// const jsonWebToken = require('jsonwebtoken')
// const myFunction = async ()=> {
//    const token = jsonWebToken.sign({_id: 'asda'}, 'thisismynewcourse', {expiresIn: '10 seconds'})
//    console.log(token)
//    const data= jsonWebToken.verify(token, 'thisismynewcourse')
//    console.log(data)
// }

// myFunction()

// const pet={
//     name: 'bruno'
// }

// pet.toJSON = function() {
//     console.log(this)
//     return this
// }
// console.log(JSON.stringify(pet))

