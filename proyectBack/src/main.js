import express from "express";
import cors from "cors";
import router from "./routes/main.routes.js";
import { engine } from "express-handlebars";
import { __dirname } from "./path.js";
import { mongoConect } from "./db/index.js";
import path from "path";

// const whiteList = [" http://localhost:5173/"];
const corsOptions = {
  origin: "*",
};

const app = express();
const PORT = 2000;

app.use(cors(corsOptions));

mongoConect();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views/"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

const server = app.listen(PORT, () => {
  console.log(`Server on port :${PORT}`);
});
