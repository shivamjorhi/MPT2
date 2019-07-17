import {Component} from '@angular/core';
import {EmployeeService}  from './app.employeeservice'
import { Router } from '@angular/router';
@Component({
    selector:'add-emp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{
    
    constructor(private myService:EmployeeService, private router:Router){}

    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    status:boolean=false;
    empAll:any;
    
    flag:boolean=false;
    addEmployee():any{
        this.empAll={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}; 
        if(this.myService.addEmployees(this.empAll)){
            this.router.navigate(['show']);
            
            alert("added");
        }
    }
    

  /*  public constructor(private myService: EmployeeService) {
        this.myService.myMethod(this.data1);
    }*/

}