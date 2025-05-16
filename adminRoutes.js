// adminRoutes.js
import express from 'express';
import connection from './server.js'; // import MySQL connection
// import connection from '../db.js'; // import MySQL connection
import express from 'express';
import connection from '../db.js'; // import MySQL connection
// ... rest of your code


import jwt from 'jsonwebtoken';

const router = express.Router();



// Replace with your actual secret key
const jwt_secret_key = 'your_jwt_secret_key_here';

router.post('/adminLogin', (req, res) => {
  const { email, password } = req.body;

  const SQL = 'SELECT * FROM admin WHERE email = ? AND password = ?';

  connection.query(SQL, [email, password], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      const admin = results[0];
      const token = jwt.sign(
        { role: 'admin', email: admin.email },
        jwt_secret_key,
        { expiresIn: '1d' }
      );
 res.cookie('token', token)
      return res.status(200).json({
        message: 'Login successful',
        user: admin,
        token: token
      });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

//export { router as adminRouter };
export default router;