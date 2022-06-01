import { Binary } from '@angular/compiler';
import { Role } from './Role.model';

export class User {
  
    public id!: number;

    public firstName!: string;
      
    public lastName!: string;	
     
    public email!: string;
  
    public password!: string;

    public mobileNo!: String;	

    public dateOfBirth!: Date;
    
    public imageUrl!: string;	

    public pic!: Binary[];
      
    public activeFlag!: Boolean;	

    public joiningDate!: Date;

    public releaseDate!: Date;	
      
    public roles!: Role[]; 

   }
  