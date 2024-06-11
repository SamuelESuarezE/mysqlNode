// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
export const connection = await mysql.createConnection({
  host: '172.16.101.146',
  user: 'camper',
  password: 'campus2023',
  port: 3306,
  database: 'm2_samuelenriquesuarezestupinan',
});

