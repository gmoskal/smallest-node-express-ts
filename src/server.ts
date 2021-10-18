import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
app.get("/api/hello", (_, res) => res.send({ message: "Hello world" }))
app.get("/", (_, res) => res.send("Go away"))
