import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor (){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  log(nm: any){
    console.log(nm);
  }

  integreRegex = /^\d+$/

  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/



  registerForm = new FormGroup({

    fname : new FormControl("", [Validators.required, Validators.maxLength(32),Validators.minLength(3)]),

    lname : new FormControl("", [Validators.required, Validators.maxLength(32),Validators.minLength(3)]),

    age : new FormControl("", [Validators.required, Validators.min(18), Validators.max(60), Validators.pattern(this.integreRegex)]),

    mobile : new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.integreRegex)]),

    email : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),

    password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

    confirm_password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

  })



  getControl(name: any): AbstractControl | null {

    return this.registerForm.get(name)

  }



  registerFn(){

    console.log(this.registerForm.value)

  }

}
