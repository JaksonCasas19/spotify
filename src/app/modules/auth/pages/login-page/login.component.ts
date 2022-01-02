import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  constructor(private authService: AuthService) { }

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
    this.authService.sendCredentials(email, password);
  }

}
