import client from '../database/MySQLClient.ts';
import ISubject from '../models/ISubject.ts';

const getSubjects = async () => {
  const results = await client.execute('SELECT * FROM Subjects;');
  return results.rows;
}

const getSubjectById = async (id: string) => {
  const result = await client.execute('SELECT * FROM Subjects where id = ' + id);
  return result.rows;
}

const addSubject = async(subject : ISubject) => {
  console.log(subject);
  const results = await client.execute(`
    INSERT INTO subject (
      Name
    ) VALUES (
      ?
    );
  `, [subject.name]);
  return results;
}


const updateSubject = async(id: string ,subject : ISubject) => {
  console.log(id);
  console.log(subject);
  const results = await client.execute(`
  UPDATE subject
  SET (
      Name,
    ) VALUES (
      ?
    ) where Id = ` + id
  , [subject.name]);
  return results;
}

const deleteSubject =async(id: string) => {
  const result = await client.execute('DELETE FROM Subjects where id = ' + id);
  return result;
  
}



const subjectRepository = {
  getSubjects,
  getSubjectById,
  addSubject,
  updateSubject,
  deleteSubject
}
export default subjectRepository;