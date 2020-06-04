import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentForAdd } from 'src/app/models/students/studentForAdd.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/services/student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ClassNameService } from 'src/app/services/class-name.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentForm: FormGroup;
  student: StudentForAdd;
  classnames: any[];
  subjects: any[] = [
    {id: 1, name: 'Toan'},
    {id: 2, name: 'Ly'},
    {id: 3, name: 'Hoa'}
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private toastr: ToastrService,
    private classnameService: ClassNameService
  ) {
    this.addStudentForm = this.fb.group({
      name: ['', Validators.required],
      //sex: ['', Validators.required],
      classId: ['', Validators.required],
      //scores: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.classnameService.getAllClasses().subscribe(data => {
      this.classnames = data;
      console.log(data);
    });
  }

  addStudent() {
    this.student = Object.assign({}, this.addStudentForm.value);
    this.studentService.createStudent(this.student).subscribe(
      () => {
        this.router.navigate(['/students']).then(() => {
          this.toastr.success('Thêm sinh vien thành công');
        });
      },
      (error: HttpErrorResponse) =>
        this.toastr.error('Thêm sinh vien không thành công!')
      );
    console.log(this.student);
  }

  get f() { return this.addStudentForm.controls; }

}
