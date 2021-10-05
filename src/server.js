require("./db/connection");

const express = require("express");
const app = express();
const router = require("./routes")

app.use(express.json());
app.use(router)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});