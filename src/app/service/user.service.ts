import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/Role.model';
import { User } from '../models/User.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { server_url } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    mobileNo: new FormControl(''),
    email: new FormControl('',[Validators.email]),
    password: new FormControl('default@12345'),
    firstName: new FormControl(''),
    lastName: new FormControl(''), 
    dateOfBirth: new FormControl(''),
    roles:new FormControl(''),
    imageUrl:new FormControl(null),
    pic:new FormControl(null),
    activeFlag:new FormControl(true),
    joiningDate:new FormControl(''),
    releaseDate:new FormControl('')   
    
    });

    initializeFormGroup() {
      this.form.setValue({
        id: null,       
        email: '',
        password: 'default@12345', 
        mobileNo: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        roles:'',
        imageUrl:'',
        pic:'',
        activeFlag:'',
        joiningDate:'',
        releaseDate:''         
      });

    }

  retrieveUserInfo(){
    return this.http.get<User>(server_url+`/getuserdetails`);
  }

  getAllUsers(){
    return this.http.get<User[]>(server_url+`/getallusers`);
  }

  deleteUser(id: any){
    return this.http.delete(server_url+`/delete-user/${id}`);
  }

  cancelUser(id: any){
    return this.http.get(server_url+`/deactivateuser/${id}`);
  }

  activateUser(id: any){
    return this.http.get(server_url+`/activateuser/${id}`);
  }
  retrieveUserRoles(){
    return this.http.get<Set<Role>>(server_url+`/getuserroles`);
  }

  saveUser(user: any){
    return this.http.post(server_url+`/saveuser`,user);
  }
  updateUser(user: any){
    return this.http.put(server_url+`/updateuser`,user);
  }

  updateUserDob(user: any){
    return this.http.put(server_url+`/updateuserdob`,user);
  }

  populateForm(user: { [key: string]: any; }) {
    this.form.setValue(user);
  }


  

  
}
