import ClassService from "../services/Class.service.ts";
import IClass from "../models/IClass.ts";

export async function getClasses({ response }: { response: any }) {
  // get params and body 
  // 
  try {
    const results = await ClassService.getClasses();
    response.status = 200;
    response.body = results;
  } catch (error) {
    response.status = 400;
    response.body = { "message": "Invalid" }
  }
}

export async function getClassById({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  try {
    const result = await ClassService.getClassById(params.id);
    response.status = 200;
    response.body = result;
  } catch (error) {
    response.status = 400;
    response.body = { "message": "Invalid" }
  }
}

export async function addClass({ request, response }: { request: any, response: any }) {
  const body = await request.body();
  const Class: IClass = body.value;
  try {
    const result = await ClassService.addClass(Class);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Invalid" }
  }
}

export async function updateClass({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  const body = await request.body();
  const Class: IClass = body.value;
  try {
    const result = await ClassService.updateClass(params.id, Class);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Invalid" }
  }
}

export async function deleteClass({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  try {
    const result = await ClassService.deleteClass(params.id);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Erro" }
  }
}