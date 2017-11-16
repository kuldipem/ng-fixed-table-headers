import { Component, OnInit } from '@angular/core';
import {ProgramService} from '../../services/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class ProgramComponent implements OnInit {

  constructor(private service: ProgramService) { }
  private data:Array<any> = [];
  private advancedSearch:boolean = false ;
  loading:boolean = false;

  payload:string;
  ngOnInit(){

 this.LaodServiceprogram();

  }

  // Initial program to data service with StartTime Sorting 
  private LaodServiceprogram(){
    this.loading = true;
    this.service.LoadApiProgram().subscribe(res=>{
      this.loading = false;
      this.data = res
    });
    
    
  }

  setModalValue(value){
    if(typeof(value)== "object"){
      this.payload = "null";
      
    }else{
      this.payload= value;
    }
  
    

  }

}