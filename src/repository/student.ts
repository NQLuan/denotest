import client from '../database/MySQLClient.ts';
import IStudent from '../models/IStudent.ts';

const getStudents = async () => {
  const results = await (await client.execute('SELECT * FROM Students;'));
  return results.rows;
}

const getStudentById = async (id: string) => {
  const result = await (await client.execute('SELECT * FROM Students where id = ' + id)).rows;
  const points =  await (await client.execute('SELECT * FROM Scores where StudentId = ' + id)).rows;
  let jsonReturn  = [
    result,
    points
  ]
  //const resultReturn = Object.assign(result, points.rows);
  return jsonReturn;
}

const addStudent = async(student : IStudent) => {
  console.log(student);
  const results = await client.execute(`
    INSERT INTO students (
      Name,
      Sex,
      ClassId
    ) VALUES (
      ?,
      ?,
      ?
    );
  `, [student.name,student.sex, student.classId]);
  return results;
}


const updateStudent = async(id: string ,student : IStudent) => {
  console.log(id);
  console.log(student);
  const results = await client.execute(`
  UPDATE Students
  SET (
      Name,
      ClassId
    ) VALUES (
      ?,
      ?
    ) where Id = ` + id
  , [student.name, student.classId]);
  return results;
}

const DeleteStudent =async(id: string) => {
  const result = await client.execute('DELETE FROM Students where id = ' + id);
  return result;
  
}



const StudentRepository = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  DeleteStudent
}
export default StudentRepository;