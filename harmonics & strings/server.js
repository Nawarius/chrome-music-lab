const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())


app.listen(port, () => {
   console.log('Server is up!')
})

if(process.env.PROD){
    app.use(express.static(path.join(__dirname, '')))
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, './index.html'))
    })
}