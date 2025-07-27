const express = require("express");
const { getStudents, getStudentById } = require("../controllers/studentController");

//Router Object

const router = express.Router();

//routes


//GET ALL STUDENTS LIST // GET

router.get('/getall',getStudents)

//GET STUDENT BY ID
router.get('/get/:id',getStudentById);

module.exports = router;