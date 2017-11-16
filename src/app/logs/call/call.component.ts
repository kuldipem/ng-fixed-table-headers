import { Component, OnInit } from '@angular/core';
import {CallService} from '../../services/call.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class CallComponent implements OnInit {

  constructor(private service: CallService) { }
  private data:Array<any> = [];
  private advancedSearch:boolean = false ;
  loading:boolean = false;

  payload:string;
  ngOnInit(){

 this.LaodServiceCall();

  }

  // Initial call to data service with StartTime Sorting 
  private LaodServiceCall(){
    this.loading = true;
    this.service.LoadApiCall().subscribe(res=>
      {
        this.loading = false;
        this.data = res});
    
  }

  setPayload(value){
    if(typeof(value) == "object"){
      
         this.payload = "null";
      
         }else{
      this.payload= value;
    }
  
    

  }
  

 

}
