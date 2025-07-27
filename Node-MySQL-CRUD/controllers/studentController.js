const db = require("../config/db");

//GET ALL STUDENT LIST 
const getStudents = async (req,res) => {
    try{
        const data= await db.query('SELECT * FROM Students')
        if(!data){
            return res.status(404).send({
                success : false,
                message : "No Records found"
            })

        }
        res.status(200).send({
            success : true,
            message : "All Students Records",
            totalStudents : data[0].length,
            data : data[0],
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in GET ALL Student API"
        })
    }
};


const getStudentById = () =>{}

module.exports = {getStudents,getStudentById};  