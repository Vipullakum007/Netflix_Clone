const expres = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-route");
const app = expres();

app.use(cors());
app.use(expres.json());


app.use("/api/users" , userRoutes);

mongoose.connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB conneted");
})

app.listen(5000, console.log(`server started at ${5000}`));