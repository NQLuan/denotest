//import IStudent from "../models/IStudent.ts"
import StudentService from "../services/students.service.ts";
import IStudent from "../models/IStudent.ts";

export async function getStudents({ response }: { response: any }) {
  // get params and body 
  // 
  try {
    const results = await StudentService.getStudents();
    response.status = 200;
    response.body = results;
  } catch (error) {
    response.status = 400;
    response.body = { "message": "Invalid" }
  }
}

export async function getStudentById({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  try {
    const result = await StudentService.getStudentById(params.id);
    response.status = 200;
    response.body = result;
  } catch (error) {
    response.status = 400;
    response.body = { "message": "Invalid" }
  }
}

export async function addStudent({ request, response }: { request: any, response: any }) {
  const body = await request.body();
  const student: IStudent = body.value;
  try {
    const result = await StudentService.addStudent(student);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Invalid" }
  }
}


// const updateBook = async ({ params, request, response }: { params: { isbn: string }; request: any; response: any }) => {
//   let book: IBook | undefined = searchBookByIsbn(params.isbn)
//   if (book) {
//     const body = await request.body()
//     const updateInfos: { author?: string; title?: string } = body.value
//     book = { ...book, ...updateInfos}
//     books = [...books.filter(book => book.isbn !== params.isbn), book]
//     response.status = 200
//     response.body = { message: 'OK' }
//   } else {
//     response.status = 404
//     response.body = { message: `Book not found` }
//   }  
// }

export async function updateStudent({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  const body = await request.body();
  const student: IStudent = body.value;
  try {
    const result = await StudentService.updateStudent(params.id, student);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Invalid" }
  }
}

export async function deleteStudent({ params, request, response }: { params: {id: string}, request: any, response: any }) {
  try {
    const result = await StudentService.deleteStudent(params.id);
    response.status = 200;
    response.body = {
      "message": "OK"
    }
  } catch (error) {
    response.status = 500;
    response.body = { "message": "Erro" }
  }
}