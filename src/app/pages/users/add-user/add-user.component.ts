import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UserType } from 'src/app/types/users.type';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{


  public user : any = {
    id: 0,
    first_name: '',
    last_name: '',
    email: ''

}
  public users: UserType[] = [];

  constructor (private usersService: UsersService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  log(nm: any){
    console.log(nm);
  }



  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/



  addForm = new FormGroup({

    first_name : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(3)]),

    last_name : new FormControl("", [Validators.required, Validators.maxLength(32),Validators.minLength(3)]),

    email : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)])


  })



  getControl(name: any): AbstractControl | null {

    return this.addForm.get(name)

  }



  addUser(){

    this.usersService.addUser(this.user).subscribe(data => {
      console.log("value : ",data);

        },
        error => {
          console.log(error);
        });

        console.log("value form: ",this.addForm.value)

  }

}
