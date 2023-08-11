import express from 'express'
import cors from 'cors'
import getResult from './routes/result.js'
import postResult from './routes/post.js'
const app = express()

app.use(express.json())
app.use(cors())

const PORT = 8000 || PORT

app.use("/api/result", getResult)
app.use("/api/postresult", postResult)

app.listen(PORT, () => {
    console.log(`conected succesfull ${PORT}`)
})