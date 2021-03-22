const sqlite3 = require('sqlite3').verbose();
let db;
db = new sqlite3.Database('DATA.db', (err) => {
  if (err) {
    console.error(err.message);
  }
});

let sql = `CREATE TABLE BTC (
  ID INTEGER PRIMARY KEY,
  TIME TEXT NOT NULL,
  TRADINGPRICE REAL NOT NULL
  );`
db.run(sql, function (err) {
  if (err) {
    return console.log(err)
  }
});


sql = `INSERT INTO BTC(TIME,TRADINGPRICE) VALUES (datetime(),1)`;
db.run(sql, function (err) {
  if (err) {
    return console.log(err)
  }
});