import {Component,OnInit} from '@angular/core';
import {EmployeeService} from './app.employeeservice'

@Component({
    selector:'show-emp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent implements OnInit{

    public empNew:any;
    public constructor(private myService: EmployeeService) {

    }

    empAll:any[]=[];
    empNew1:any[]=[];
    ngOnInit(){
     //   this.myService.getAllEmployee().subscribe((data:any)=>this.empAll=data);
     this.empNew1=this.myService.sendEmployee();
    }

    delete(data:any)
    {
       this.empNew1.splice(data,1);
    }


     emId:any;
     emName:any;
     emSalary:any;
     emDep:any;
     arr2:any[]=[];
     emindex:number;
     update(index:any)
     {
        this.emindex=index;
        this.emId=this.empNew1[index].empId;
        this.emName=this.empNew1[index].empName;
        this.emSalary=this.empNew1[index].empSalary;
        this.emDep=this.empNew1[index].empDepartment;
     }

     updatevalue()
     {
        this.empNew1.splice(this.emindex,1);
        this.empNew1.push({empId:this.emId,empName:this.emName,empSalary:this.emSalary,empDepartment:this.emDep});
     }


    
    

        
  
}