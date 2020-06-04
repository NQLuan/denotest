import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private router: Router) {
}

ngOnInit() {
}

logout() {
    this.router.navigate(['/login']).then(() => {
        this.toastr.success('Đăng xuất thành công!');
    });
}

}
