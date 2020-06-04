import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-edit-score',
  templateUrl: './edit-score.component.html',
  styleUrls: ['./edit-score.component.css']
})
export class EditScoreComponent implements OnInit {

  editScoreForm: FormGroup;
  score: any;
  id: any;
  studentId: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private scoreService: ScoreService,
    private toastr: ToastrService
  ) {
    this.editScoreForm = this.fb.group({
      score: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.scoreService.getScoreById(this.id).subscribe(
          result => {
            this.score = result;
            console.log(result[0]);
             this.editScoreForm.controls.score.setValue(result[0].score);
             this.studentId = result[0].studentid;
          },
          () => {
            this.toastr.error(`Không tìm thấy sinh viên này`);
          });
      }
    });
  }

  editScore() {
    this.score = Object.assign({}, this.editScoreForm.value);
    //console.log(this.score);
     this.score.score = Number(this.score.score);

    this.scoreService.editScore(this.id, this.score).subscribe(
      () => {
        this.router.navigate(['/students/detail/'+this.studentId]).then(() => {
          this.toastr.success('Cập nhật sinh viên thành công');
        });
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Cập nhật sinh vien không thành công!');
      }
    );
  }

}
