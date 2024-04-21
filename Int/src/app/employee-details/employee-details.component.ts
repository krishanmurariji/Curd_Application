import { Component, OnInit, ViewChild, viewChild} from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(public empService: EmployeeService, public datapipe:DatePipe, public toster:ToastrService) {}
  @ViewChild(EmployeeFormComponent) emp: EmployeeFormComponent;
  ngOnInit() {
    this.fetchEmployeeData();
  }

  fetchEmployeeData() {
    this.empService.getEmployee().subscribe(data=>{
    
      this.empService.listEmployee=data;
    });
  }
  populatedata(selectedEmployee:Employee){
    console.log(selectedEmployee.dob)
    let df=this.datapipe.transform(selectedEmployee.dob,'yyyy-MM-dd');
    selectedEmployee.dob =df;
    console.log(selectedEmployee.dob)

    this.empService.employeeData=selectedEmployee;
    
    if(this.emp.isSlide==='off'){
      this.emp.hideshowslide();
    }

  }
  delete(id:number){
    if(confirm('Are you really Want to delete this record')){
    this.empService.deleteEmployee(id).subscribe(data=>{
      console.log('Record Deleted!');
      this.empService.getEmployee().subscribe(data=>{
        console.log(data); // Add this line to inspect the response data
        this.empService.listEmployee=data; 
      });
      this.toster.error('Success','Record Deletd')
    },err=>{
      console.log('Record not  Deleted!')
    });
    }
  }

}