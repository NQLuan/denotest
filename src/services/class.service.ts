import ClassRepository from "../repository/class.ts";
import IClass from "../models/IClass.ts";

const getClasses = async () => {
  const Class = await ClassRepository.getClasses();
  return Class;
}

const getClassById = async (id: string) => {
  const Class = await ClassRepository.getClassById(id);
  return Class;
}

const addClass = async (Class: IClass) => {
  const results = await ClassRepository.addClass(Class);
  return results;
}

const updateClass = async (id: string, Class: IClass) => {
  const results = await ClassRepository.updateClass(id, Class);
  return results;
}

const deleteClass = async (id: string) => {
  const results = await ClassRepository.deleteClass(id);
  return results;
}

const ClassService = {
  getClasses,
  getClassById,
  addClass,
  updateClass,
  deleteClass
}

export default ClassService;