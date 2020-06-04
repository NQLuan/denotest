import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getStudents, getStudentById, addStudent, updateStudent, deleteStudent } from '../controllers/students.controller.ts';

const routers = new Router();

// routers.get('/', function ({ response }: { response: any }) {
//   response.status = 200;
//   response.body = {
//     "message": "Hello World Routing"
//   }
// });

// router.get("/api/v1/migrate", Migrations);
// router.get("/api/v1/users", allUsers);
// // router.get("/api/v1/users/:id", getUser);
// // router.post("/api/v1/users", createUser);
// // router.delete("/api/v1/users/:id", deleteUser);

routers.get('/student', getStudents);
routers.get('/student/:id', getStudentById);
routers.post('/student', addStudent);
routers.put('/student/:id', updateStudent);
routers.delete('/student/:id', deleteStudent);
// routers.post('/dishes', addDish);

export default routers;
