import express from "express"
import { connect } from "mongoose"
import morgan from "morgan"
import { userRouter } from "./routes/user.routes.js"

const app = express();
const DB_URL = "mongodb+srv://Tomi:pino2@cluster0.ows9g.mongodb.net/proyecto1?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 5000;

// Configuracion de Express
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan("dev"));

// Configuracion de Express
connect(DB_URL)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));

// rutas
app.use("/api/users", userRouter);

// INICIALIZACION DEL SERVER
app.listen(PORT, () => {
    console.log(`}Sever running on port http://localhost:${PORT}`);
});