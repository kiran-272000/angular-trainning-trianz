import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/user/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //method 1 check register model
  register: Register= new Register();
  //method 2
  // register: Register

  constructor() { }

  ngOnInit(): void {
  }

  registerSubmit(){
    console.log(JSON.stringify(this.register));
  }

}
