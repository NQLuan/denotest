import { Component, OnInit, TemplateRef } from '@angular/core';
import { Student } from 'src/app/models/students/student.model';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExportService } from 'src/app/services/export.service';
import { Observable} from 'rxjs';
import { Score } from 'src/app/models/score/score.model';
import { ClassNameService } from 'src/app/services/class-name.service';

@Component({
  selector: 'app-hocbong',
  templateUrl: './hocbong.component.html',
  styleUrls: ['./hocbong.component.css']
})
export class HocbongComponent implements OnInit {

  // students: Student[] = [
  //   {id: 1, name: 'Diep', diemTB: 6},
  //   {id: 2, name: 'Pham', diemTB: 5},
  //   {id: 3, name: 'Con', diemTB: 7},
  //   {id: 4, name: 'Hay', diemTB: 8},
  // ];
  student: Student;
  // keyword: string;
  students: any[] = [];
  students1: any[] = [];
  scores: Score[] = [];
   itemsAsync: Observable<any[]>;
   modalRef: BsModalRef;
  // page: number;
  // pageSize: number;
  // total: number;

  constructor(
    public studentService: StudentService,
    private router: Router,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private loadingBar: LoadingBarService,
    private exportService: ExportService,
    public classnameService: ClassNameService
  ) { }

  ngOnInit() {
    // this.keyword = '';
    // this.page = 1;
    // this.pageSize = 10;
    this.getAllStudents();
  }

  getAllStudents() {
    this.loadingBar.start();
    this.itemsAsync = this.studentService.getAllStudents();
    //this.studentService.getAllStudents().subscribe((data: any) => console.log(data));
    //console.log(this.itemsAsync);
    this.itemsAsync.subscribe(data => {
      this.students = data;
      this.students.forEach(item => {
        this.studentService.getStudentById(item.Id).subscribe(data1 => {
          item['diemTB'] = this.tinhDiemTB(data1[1]);
          this.classnameService.getClassById(item.ClassId).subscribe(result => item.className =  result[0].Name);
          if(item['diemTB'] >= 8) this.students1.push(item);
        });
        
      });
      console.log(this.students);
      //this.students = this.students.filter(x => console.log(x.diemTB));
      this.students.forEach(item => console.log(item['diemTB']));
      console.log(this.students);
      //add them
    });
    this.loadingBar.stop();

  }

  add() {
    this.router.navigate(['/students/add']);
  }

  edit(id: any) {
    this.router.navigate(['/students/edit/' + id]);
  }

  // editFull(id: any) {
  //     this.router.navigate(['/users/editfull/' + id]);
  // }

  deleteConfirm(template: TemplateRef<any>, data: any) {
    this.student = Object.assign({}, data);
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void {
    if (this.student) {
      this.studentService.deleteStudent(this.student.id)
        .subscribe(
          () => {
            this.getAllStudents();
            this.toastr.success(`Xóa nhà sinh vien thành công`);
          },
          (error: HttpErrorResponse) => {
            this.toastr.error(('Xóa nhà cung cấp  không thành công'));
          }
        );
    }
    this.student = undefined;
    this.modalRef.hide();
  }

  close(): void {
    this.student = undefined;
    this.modalRef.hide();
  }

  search() {
    this.getAllStudents();
  }

  refresh() {
    // this.keyword = '';
    this.getAllStudents();
  }

  export() {
    this.exportService.exportExcel(this.students1, 'students');
    //this.itemsAsync.subscribe( data => this.exportService.exportExcel(data, 'students'));
  }

  tinhDiemTB(scores: any[]) {
    let diem = 0;
    let length = 1;
    if (scores.length !== 0){
      length = scores.length;
    }
    scores.forEach(item => {
      diem = diem + item.Score;
    });
    return diem / length  ;
  }

  getStudentById(id: any) {
    this.router.navigate(['/students/detail/' + id]);
  }

}
