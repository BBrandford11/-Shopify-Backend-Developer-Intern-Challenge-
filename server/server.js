const express = require("express");
require("dotenv").config();
var cors = require("cors");

// express app
const app = express();
const port = 3001;

var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
};

// middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// con setting
// const pg = require("pg");
const { Pool } = require("pg");

const pool = new Pool({
  host: "heffalump.db.elephantsql.com",
  user: "cqhojvry",
  password: "",
  max: 20,
  database: "cqhojvry",
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.connect();

app.get("/", (req, res) => {
  pool.query("SELECT * FROM Products", function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    const data = JSON.stringify(result.rows);

    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
