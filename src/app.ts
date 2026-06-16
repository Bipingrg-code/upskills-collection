import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()
// cor setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// json data setup
app.use(express.json({
    limit: "18kb"
}))

// ulr data config
app.use(express.urlencoded({
    extended: true,
    limit: "18kb"
}))

// static config
app.use(express.static("public"))

// cookie config
app.use(cookieParser())

export { app }