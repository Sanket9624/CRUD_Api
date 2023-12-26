const express = require('express')
const router = express.Router()
const db = require('./database.js')
router.get('/users', (req, res) => {
            db.query('SELECT * FROM users', (error, data) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error retrieving users');
              } else {
                res.send(data);
              }
            });
          });
          router.post('/users', (req, res) => {
            const { user_name, user_password } = req.body;
            db.query('INSERT INTO users (user_name, user_password) VALUES (?, ?)', [user_name, user_password], (error) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error creating user');
              } else {
                res.send('User created successfully');
              }
            });
          });  
          router.put('/users/:id', (req, res) => {
            const { id } = req.params;
            const { user_name, user_password } = req.body;
            db.query('UPDATE users SET user_name = ?, user_password = ? WHERE user_id = ?', [user_name, user_password, id], (error) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error updating user');
              } else {
                res.send('User updated successfully');
              }
            });
          });
          router.delete('/users/:id', (req, res) => {
            const { id } = req.params;
            db.query('DELETE FROM users WHERE user_id = ?', [id], (error) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error deleting user');
              } else {
                res.send('User deleted successfully');
              }
            });
          });

module.exports = router