import StudentRepository from "../repository/student.ts";
import IStudent from "../models/IStudent.ts";

const getStudents = async () => {
  const student = await StudentRepository.getStudents();
  return student;
}

const getStudentById = async (id: string) => {
  const student = await StudentRepository.getStudentById(id);
  return student;
}

const addStudent = async (student: IStudent) => {
  const results = await StudentRepository.addStudent(student);
  return results;
}

const updateStudent = async (id: string, student: IStudent) => {
  const results = await StudentRepository.updateStudent(id, student);
  return results;
}

const deleteStudent = async (id: string) => {
  const results = await StudentRepository.DeleteStudent(id);
  return results;
}

// const addDish = async (dish: IDish) => {
//   const results = await DishRepository.addDish(dish);
//   return results;
// }
const StudentService = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
}

export default StudentService;