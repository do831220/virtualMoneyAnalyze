let fetch = require('node-fetch');

const sqlite3 = require('sqlite3').verbose();
let db;
db = new sqlite3.Database('DATA.db', (err) => {
  if (err) {
    console.error(err.message);
  }
});

let cnt=0;
fetch('https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=2')
  .then(res => res.json())
  .then(json => {

    console.log(json);
    sql = `INSERT INTO BTC(TIME,TRADINGPRICE) VALUES (datetime(),${json[cnt].trade_price})`;
    cnt++;
    db.run(sql, function (err) {
      if (err) {
        return console.log(err)
      }
    });
  })
  .catch(err => console.error('error:' + err));
