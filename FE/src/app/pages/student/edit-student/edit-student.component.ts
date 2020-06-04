import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ClassNameService } from 'src/app/services/class-name.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editStudentForm: FormGroup;
  student: any;
  id: any;
  classnames: any[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private classnameService: ClassNameService,
    private toastr: ToastrService
  ) {
    this.editStudentForm = this.fb.group({
      name: ['', Validators.required],
      classId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getAllClassname();

    this.route.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.studentService.getStudentById(this.id).subscribe(
          result => {
            this.student = result;
            this.editStudentForm.controls.name.setValue(result[0][0].Name);
            this.editStudentForm.controls.classId.setValue(result[0][0].ClassId);
          },
          () => {
            this.toastr.error(`Không tìm thấy sinh viên này`);
          });
      }
    });
  }

  getAllClassname() {
    this.classnameService.getAllClasses().subscribe(data => this.classnames = data);
  }

  editStudent() {
    this.student = Object.assign({}, this.editStudentForm.value);
    this.student.classId = Number(this.student.classId);

    this.studentService.editStudent(this.id, this.student).subscribe(
      () => {
        this.router.navigate(['/students']).then(() => {
          this.toastr.success('Cập nhật sinh viên thành công');
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Cập nhật sinh vien không thành công!');
      }
    );
  }

  get f() { return this.editStudentForm.controls; }

}
