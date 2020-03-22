const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');

  //create db if doesnt exist   
  con.query("CREATE DATABASE IF NOT EXISTS onboarding_survey", (err, rows) => {
    if(err) throw err;
    con.query("USE onboarding_survey", (err, res) => {
      if(err) throw err;

      console.log('onboarding_survey db connected');

      //create tables if not created;
      con.query(`CREATE TABLE IF NOT EXISTS questions (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        text VARCHAR(255), 
        answer VARCHAR(100), 
        answer2 VARCHAR(100),
        answer3 VARCHAR(100),
        answer4 VARCHAR(100)
      )`, (err, rows) => {
        if(err) throw err;

        //check if table empty
        con.query(`SELECT * FROM questions`, (err, rows) => {
          if(err) throw err;

          //if empty then populate
          if(!rows.length){
            con.query(`INSERT INTO questions (text, answer, answer2, answer3, answer4) VALUES 
              (
                'How often do you eat meat and dairy?',
                'Daily',
                '1 or 2 times',
                '3+ times per week',
                'Not at all'
              ),
              (
                'How big are your portions sizes?',
                'Smaller than average',
                'Average',
                'Larger than average',
                'I\\'m not sure'
              ),
              (
                'How much food ends up wasted in your household?',
                'None',
                '1-5 plates per week',
                '6-10 plates per week',
                'More than 10 plates per week'
              ),
              (
                'How often do you eat avocados, asparagus, kiwi, fruit, pineapples?',
                'Daily',
                '1 or 2 times',
                '3+ times per week',
                'Not at all'
              )`, (err, rows) => {
                if(err) throw err;
            });
          }
        });

      });

    });
  });
});

module.exports = con; 
// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });