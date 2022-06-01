import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { server_url } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  user: User = new User();

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    mobileNo: new FormControl(''),
    email: new FormControl('',[Validators.email]),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''), 
    dateOfBirth: new FormControl('')  
     
    });

    initializeFormGroup() {
      this.form.setValue({
        id: null,       
        email: '',
        password: '', 
        mobileNo: '',
        firstName: '',
        lastName: '',
        dateOfBirth: ''     
        
      });

    }

  saveUser(user: any) {
    return this.http.post(server_url+`/register/${'user'}`,user);
  }


  populateForm(row: any) {
    this.form.setValue(row);
  }

}
