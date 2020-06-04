import subjectService from "../services/subject.service.ts";
import ISubject from "../models/ISubject.ts";

export async function getSubjects({ response }: { response: any }) {
  // get params and body 
  // 
  try {
    const results = await subjectService.getSubjects();
    response.status = 200;
    response.body = results;
  } catch (error) {
    response.status = 400;
    response.body = { "message": "Invalid" }
  }
}

export async function getSubjectById({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  try {
    const result = await subjectService.getSubjectById(params.id);
    response.status = 200;
    response.body = result;
  } catch (error) {
    response.status = 400;
    response.body = { "message": "Invalid" }
  }
}

export async function addSubject({ request, response }: { request: any, response: any }) {
  const body = await request.body();
  const Subject: ISubject = body.value;
  try {
    const result = await subjectService.addSubject(Subject);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Invalid" }
  }
}

export async function updateSubject({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  const body = await request.body();
  const Subject: ISubject = body.value;
  try {
    const result = await subjectService.updateSubject(params.id, Subject);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Invalid" }
  }
}

export async function deleteSubject({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  try {
    const result = await subjectService.deleteSubject(params.id);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Erro" }
  }
}