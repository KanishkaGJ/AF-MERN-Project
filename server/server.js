const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../client/src/Assets/images"));
app.use(express.static("../client/src/Assets/animalblogs"));

//connect database
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, () => {
  useNewUrlParser: true;
  useCreateIndex: true;
  useUnifiedTopology: true;
  useFindAndModify: false;
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection success !!");
});

//AgriBlog Routes
const agriBlogRouter = require("./Routes/AgriBlog-route");
app.use("/agriBlog", agriBlogRouter);

//Beef production Routes.
const beefProductionRouter = require ("./Routes/BeefProduction-route");
app.use("/beefProduction", beefProductionRouter);

//Milk production routes.
const milkProductionRouter = require ("./Routes/MilkProduction-route");
app.use("/milkProduction", milkProductionRouter);

//Egg production routes.
const eggProductionRouter = require ("./Routes/EggProduction-route");
app.use("/eggProduction", eggProductionRouter);

//Pork production routes.
const porkProductionRouter = require ("./Routes/PorkProduction-route");
app.use("/porkProduction", porkProductionRouter);

//Chicken production routes.
const chickenProductionRouter = require ("./Routes/ChickenProduction-route");
app.use("/chickenProduction", chickenProductionRouter);

//Goat milk production routes.
const goatMilkProductionRouter = require ("./Routes/GoatMilkProduction-route");
app.use("/goatMilkProduction", goatMilkProductionRouter);

//Goat meat production routes.
const goatMeatProductionRouter = require ("./Routes/GoatMeatProduction-route");
app.use("/goatMeatProduction", goatMeatProductionRouter);

//Test Image
const imageRouter = require("./Routes/ImageTest-route");
app.use("/imageTest", imageRouter);

//Agriculture production routes.
const agricultureRouter =require("./Routes/AgricultureProducion-route");
app.use("/agricultureProduction", agricultureRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT} !`);
});
