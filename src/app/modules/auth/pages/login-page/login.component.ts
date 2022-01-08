import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSesion: boolean = false;
  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email:new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  sendLogin(): void{
    const {email, password} = this.formLogin.value; //Estructuración
    /*
    const body = this.formLogin.value; Body recibe dos parametros
    */
    this.authService.sendCredentials(email, password)
    //Http: 200 < 400
    .subscribe(response => {
      //Cuando el usuario ingresa sus credenciales correctas
      console.log('Sesión iniciada correcta', response);
      const {tokenSession, data} = response;
      this.cookie.set('token',tokenSession, 2,'/');
      this.router.navigate(['/','tracks'])
    },
    err => {
      this.errorSesion = true;
      console.log('Error email o password');
    })
  }

}
