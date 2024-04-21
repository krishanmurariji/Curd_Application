import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  constructor(public empService : EmployeeService, public toster:ToastrService){ }
 @ViewChild('checkbox1') checkBox:ElementRef;
 isSlide:string='off';
 //viewchld is decorater used to manipultaed frontent entity covered in DOM through Backend

  ngOnInit() {
    this.empService.getDesignation().subscribe(data=>{
        this.empService.listDesignation=data;
    });
    
  }
  submit(form:NgForm){
    
    this.empService.employeeData.isMarried=form.value.isMarried==true?1:0;
    this.empService.employeeData.isActive=form.value.isActive==true?1:0;
    if(this.empService.employeeData.id==0)
      this.insertEmployee(form);
    else
    this.updateEmployee(form);

   console.log('form working')
  }

  insertEmployee(myform:NgForm){
    this.empService.saveEmployee().subscribe(d=>{
      this.resetform(myform);
      this.refreshdata();
      console.log('Save Succesed')
      this.toster.success('Success','Recored Entered Successfully');
    });

  }
  updateEmployee(myform: NgForm) {
    this.empService.updateEmployee().subscribe(
      d => {
        this.resetform(myform);
        this.refreshdata(); // Refresh the listEmployee array
        console.log('Update Succeeded');
        this.toster.warning('Success', 'Updation Successfully completed');
      },
      err => {
        console.log('Error occurred during update:', err);
        this.toster.error('Error', 'Failed to update record');
      }
    );
  }
  resetform(myform:NgForm){
    myform.form.reset();
    this.hideshowslide();
  }
  
  refreshdata() {
    this.empService.getEmployee().subscribe(res => {
      this.empService.listEmployee = res;
    });
  }

   hideshowslide(){
    if(this.checkBox.nativeElement.checked){
      this.checkBox.nativeElement.checked=false;
      this.isSlide='off';
    }
    else{
      this.checkBox.nativeElement.checked=true;
      this.isSlide='on';
    }
   }
}
