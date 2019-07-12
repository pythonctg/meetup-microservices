import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ){

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'first_name': ['', [Validators.required]],
      'last_name': ['', [Validators.required, Validators.minLength(6)]],
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'password_confirm': ['', [Validators.required]]
    });
  }

  register(){
    console.log(this.form.value)
  }
 
}
