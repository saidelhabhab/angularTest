
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  public email ='';
  public password ='';
  public message ='';

  integreRegex = /^\d+$/ ;

  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ ;



  constructor (private router: Router){ }

  ngOnInit(): void {

  }


  formLogin = new FormGroup({
    email :  new FormControl('',
    Validators.compose(
      [ Validators.required,
        Validators.maxLength(32),
        Validators.pattern(this.emailRegex)]
     )),

    password : new FormControl('', Validators.compose(
      [ Validators.required,
        Validators.maxLength(32),
        Validators.minLength(8)]
    ))
  })

  getControl(name: any): AbstractControl | null {

    return this.formLogin.get(name)

  }

  login = ()=> {
    if (this.email === "admin" && this.password === "admin"){

      this.router.navigateByUrl('');
      this.message = "success";
    }
    else{
      this.message = "invalid username or password";
      this.router.navigateByUrl('');
    }

    console.log("value : ",this.formLogin.value)


  }


}
