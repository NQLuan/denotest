import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getStudents, getStudentById, addStudent, updateStudent, deleteStudent } from '../controllers/students.controller.ts';
import {getScores,getScoreById, addScore, updateScore, deleteScore} from '../controllers/score.controller.ts';
import { getSubjects, getSubjectById, addSubject, updateSubject, deleteSubject } from '../controllers/subject.controller.ts';
import { getClasses, getClassById, addClass, updateClass, deleteClass } from '../controllers/class.controller.ts';


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

routers.get('/api/student', getStudents);
routers.get('/api/student/:id', getStudentById);
routers.post('/api/student', addStudent);
routers.put('/api/student/:id', updateStudent);
routers.delete('/api/student/:id', deleteStudent);
// routers.post('/dishes', addDish);

routers.get('/api/score', getScores);
routers.get('/api/score/:id', getScoreById);
routers.post('/api/score', addScore);
routers.put('/api/score/:id', updateScore);
routers.delete('/api/score/:id', deleteScore);

routers.get('/api/subject', getSubjects)
.get('/api/subject/:id', getSubjectById)
.post('/api/subject', addSubject)
.put('/api/student/:id', updateSubject)
.delete('/api/subject/:id', deleteSubject)

.get('/api/class', getClasses)
.get('/api/class/:id', getClassById)
.post('/api/class', addClass)
.put('/api/class/:id', updateClass)
.delete('/api/class/:id', deleteClass);


export default routers;
