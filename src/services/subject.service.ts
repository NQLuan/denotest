import SubjectRepository from "../repository/Subject.ts";
import ISubject from "../models/ISubject.ts";

const getSubjects = async () => {
  const Subject = await SubjectRepository.getSubjects();
  return Subject;
}

const getSubjectById = async (id: string) => {
  const Subject = await SubjectRepository.getSubjectById(id);
  return Subject;
}

const addSubject = async (Subject: ISubject) => {
  const results = await SubjectRepository.addSubject(Subject);
  return results;
}

const updateSubject = async (id: string, Subject: ISubject) => {
  const results = await SubjectRepository.updateSubject(id, Subject);
  return results;
}

const deleteSubject = async (id: string) => {
  const results = await SubjectRepository.deleteSubject(id);
  return results;
}

const SubjectService = {
  getSubjects,
  getSubjectById,
  addSubject,
  updateSubject,
  deleteSubject
}

export default SubjectService;