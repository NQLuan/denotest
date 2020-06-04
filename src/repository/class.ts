import client from '../database/MySQLClient.ts';
import IClass from '../models/IClass.ts';

const getClasses = async () => {
  const results = await client.execute('SELECT * FROM Classes;');
  return results.rows;
}

const getClassById = async (id: string) => {
  const result = await client.execute('SELECT * FROM Classes where id = ' + id);
  return result.rows;
}

const addClass = async(Class : IClass) => {
  console.log(Class.className);
  const results = await client.execute("INSERT INTO `classes` (`Name`) VALUES ('"+Class.className+"');");
  return results;
}


const updateClass = async(id: string ,Class : IClass) => {
  console.log(id);
  console.log(Class);
  const results = await client.execute("UPDATE `classes` SET `Name`='"+Class.className+"' WHERE `Id`='"+id+"';");
  return results;
}

const deleteClass =async(id: string) => {
  const result = await client.execute('DELETE FROM Classes where id = ' + id);
  return result;
  
}



const ClassRepository = {
  getClasses,
  getClassById,
  addClass,
  updateClass,
  deleteClass
}
export default ClassRepository;