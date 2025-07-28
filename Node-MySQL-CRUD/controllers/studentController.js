const db = require("../config/db");

//GET ALL STUDENT LIST
const getStudents = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM Students");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All Students Records",
      totalStudents: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GET ALL Student API",
    });
  }
};

//GET STUDENT BY ID
const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        message: "Invalid Or Provide Student id",
      });
    }
    //const data = await db.query(`SELECT * FROM students WHERE id=`+studentId);
    const data = await db.query(`SELECT * FROM students WHERE id=?`, [
      studentId,
    ]);
    if (!data) {
      return res.status(400).send({
        success: false,
        message: "no Records found",
      });
    }
    res.status(200).send({
      success: true,
      studentDetails: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get student by id API",
      error,
    });
  }
};

//CREATE STUDENT
const createStudent = async (req, res) => {
  try {
    const { name, roll_no, medium, fees } = req.body;
    if (!name || !roll_no || !medium || !fees) {
      return res.status(500).send({
        success: false,
        message: "please provide all fields",
      });
    }
    const data = await db.query(
      `INSERT INTO students(name,roll_no,  fees, medium) VALUES (?, ?, ?, ?)`,
      [name, roll_no, fees, medium]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error in INSERT query",
      });
    }
    res.status(201).send({
      success: true,
      message: "NEW Student Record Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).sen({
      success: false,
      message: "Error in Create Student API",
      error,
    });
  }
};

//UPDATE STUDENT

const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        message: "Invalid ID or provide Id ",
      });
    }
    const { name, roll_no, fees, medium } = req.body;
    const data = await db.query(
      `UPDATE students SET name = ? ,roll_no = ?, fees = ?, medium = ? WHERE id = ?`,
      [name, roll_no, fees, medium, studentId]
    );
    if (!data) {
      return res.status(500).send({
        success: false,
        message: "Error in UPDATE Data",
      });
    }
    res.status(200).send({
      success: true,
      message: "Student Details Updated",
    });
  } catch (error) {
    console.log(error);
    req.status(500).send({
      success: false,
      message: "Error in UPDATE Student API",
      error,
    });
  }
};

//DELETE STUDENT
const deleteStudent = async (req, res) => {
    try{
        const studentId = req.params.id;
        if(!studentId) {
            return res.status(404).send({
                success: false,
                message :'Please Provide Student Id or Valid Student Id'
            })
        }

        await db.query(`DELETE FROM students WHERE id = ? `,[studentId])
        res.status(200).send({
            success : true,
            message : "Student Deleted Successfully  "
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message :'Error in DELETE Student API',
            error
        })    
    }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
