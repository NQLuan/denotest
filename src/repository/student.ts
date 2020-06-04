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
  const id = await (await client.execute("SELECT @@IDENTITY as LastID")).rows;
  let lastid = id?.find(x => x.LastID > 0);
  await client.execute(`
      INSERT INTO scores (
        Score,
        StudentId,
        SubjectId
      ) VALUES (
        ?,
        ?,
        ?
      );
    `, [0, lastid.LastID, 1]);
    await client.execute(`
      INSERT INTO scores (
        Score,
        StudentId,
        SubjectId
      ) VALUES (
        ?,
        ?,
        ?
      );
    `, [0, lastid.LastID, 2]);
    await client.execute(`
      INSERT INTO scores (
        Score,
        StudentId,
        SubjectId
      ) VALUES (
        ?,
        ?,
        ?
      );
    `, [0, lastid.LastID, 3]);
  return results;
}

// UPDATE `students` SET `Name`='" + "1" +"', `Sex`=" + student.sex + ", `ClassId`='"+student.classId+"' WHERE `Id`='"+"1"+"'"
const updateStudent = async(id: string ,student : IStudent) => {
  let query = "UPDATE `students` SET `Name`='" + student.name +"', `Sex`=" + 1 + ", `ClassId`='"+student.classId+"' WHERE `Id`='"+id+"'";
  const results = await client.execute(query);
  
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