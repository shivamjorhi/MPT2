import {Component} from '@angular/core';
import { EmployeeService } from './app.employeeservice';

@Component({
    selector:'search-emp',
    templateUrl:'searchemployee.html'
})

export class SearchEmployeeComponent {
    constructor(private myService:EmployeeService){}
    empId1:number;

    allData:any;
    searchedData:any[]=[];

   

    searchEmp(){
        this.allData=this.myService.sendEmployee();
        for(let d of  this.allData){
            if(d.empId==this.empId1)
                this.searchedData.push(d);
            

        }
        
    }

}