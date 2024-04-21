import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation, Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myhttp :HttpClient) { }
  employeeUrl:string='https://localhost:44382/api/employee';
  designationUrl:string='https://localhost:44382/api/TblDesignations';
  listEmployee:Employee[]=[]; // to save data
  listDesignation:Designation[]=[]; // to save data 

  //to post and update data of insert
  employeeData:Employee = new Employee();

  saveEmployee(){
    return this.myhttp.post(this.employeeUrl,this.employeeData);
    //return kardo myhttp variable jispe post cmd lagi hai
    //post function used to update cmd, so we have to pass first ur where is the data base and then we have to pass data variable
  }
  updateEmployee(){
    return this.myhttp.put(`${this.employeeUrl}/${this.employeeData.id}`,this.employeeData);

  }
  getEmployee():Observable<Employee[]>
  {
    return this.myhttp.get<Employee[]>(this.employeeUrl);
  }
  getDesignation():Observable<Employee[]>
  {
    return this.myhttp.get<Employee[]>(this.designationUrl);
  }
  deleteEmployee(id:Number) 
  {
    return this.myhttp.delete(`${this.employeeUrl}/${id}`)

  }

}
