const express = require("express");
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

//Router Object

const router = express.Router();

//routes

//GET ALL STUDENTS LIST // GET

router.get("/getall", getStudents);

//GET STUDENT BY ID
router.get("/get/:id", getStudentById);

//CREATE STUDENT || POST
router.post("/create", createStudent);

//UPDATE STUDENT || PUT
router.put("/update/:id", updateStudent);

//DELETE STUDENT || DELETE
router.delete("/delete/:id", deleteStudent);

module.exports = router;
