const express = require('express');

const routes = express.Router();

const admincontroller = require('../controllers/AdminController');

routes.get('/',admincontroller.index);
routes.post('/insertData',admincontroller.addrecord);


module.exports = routes;