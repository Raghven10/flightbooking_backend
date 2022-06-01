import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { server_url } from '../app.constant';
import { Role } from '../models/Role.model';

@Injectable({
  providedIn: 'root'
})
export class RoletypeService {

  constructor(private http:HttpClient) { } 

  findAllRoleTypes(){
    return this.http.get<Role[]>(server_url+`/findallroletypes`);
  }

  saveRoleType(roleType: any){
    return this.http.post(server_url+`/saveRoletype`,roleType);
  }

  deleteRoleType(id: any) {
    return this.http.delete(server_url+`/deleteRoleType/${id}`);
  }

  cancelRoleType(id: any) {
    return this.http.post(server_url+`/cancelRoleType/${id}`,id);
  }

  populateForm(row: { [key: string]: any; }) {
    this.form.setValue(row);
  }


  form: FormGroup = new FormGroup({
    
    id: new FormControl(null),    
    
    roleName: new FormControl('',[Validators.required]),	
    
    roleDesc:new FormControl('',[Validators.required])  
     
  });

  initializeFormGroup() {
      this.form.setValue({
        
        id: '',        
        roleName: '',	    
        roleDesc:''	      
      });

    }
}
