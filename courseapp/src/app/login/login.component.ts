import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  username: string = 'azarmfa@gmail.com';
  password: string = '12345';
  ngOnInit(): void {
    // this.http
    //   .get('http://localhost:4000/validateUser', { withCredentials: true })
    //   .subscribe((res: any) => {
    //     console.log(res);
    //   });
  }

  logincheck() {
    this.http
      .post(
        'http://localhost:4000/login',
        {
          username: this.username,
          password: this.password,
        },
        { withCredentials: true }
      )
      .subscribe((res: any) => {
        console.log(res);
        if (res.status == 'success') this.router.navigate(['/dashboard']);
        else this.router.navigate(['/error']);
      });
  }
}
