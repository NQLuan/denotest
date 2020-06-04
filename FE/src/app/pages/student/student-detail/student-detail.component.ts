import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScoreService } from 'src/app/services/score.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: any;
  id: any;
  stu: any;
  value: any;
  points : any[];
  constructor(private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getStudentById(this.id);
  }

  getStudentById(id: number) {
    this.studentService.getStudentById(id).subscribe(data => {
      console.log(data);
      this.student = data;
      this.stu = this.student[0];
      this.points = this.student[1];
      this.points.forEach(item => {
        this.scoreService.getScoreById(item.Id).subscribe(data => item['name'] =  data[0].name);
      });
      // console.log(this.stu[0].Name);
      // console.log(this.student[1]);
      });
  }

  // getNameScore(id: number){
  //   let dataReturn = '';
  //   this.scoreService.getScoreById(id).subscribe(data => dataReturn = data[0].name);
  //   return dataReturn;
  // }
  editScore(id: any) {
    this.router.navigate(['/students/editscore/' + id]);
  }

}
