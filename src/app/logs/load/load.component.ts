import { Component, OnInit,AfterViewInit } from '@angular/core';
import {LoadService} from '../../services/load.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class LoadComponent implements AfterViewInit {

    private data:Array<any> = [];
    private advancedSearch:boolean = false ;
    count:number = 100;
    loading:boolean = false;
  
    constructor(private service:LoadService){
  
  
    }
    ngOnInit(){
  
   this.LaodServiceCall();
  
    }
    ngAfterViewInit() {
      window['fixTable']();
  }

    // Initial call to data service with StartTime Sorting 
    private LaodServiceCall(){
      this.loading = true;
      this.service.LoadApiCall().subscribe(res=>{
        this.loading = false;
       return this.data = res;
      });
      
      
    }


    // Sorting function for sorting the table depends upon the table heading clicks 
    private sortingTableData(sortingValue : string ){

   this.service.sortingUrl(sortingValue).subscribe(res=>this.data = res);

    }
    // toggle advanced search 
    private showAdvancedSearch(){
      this.advancedSearch = !this.advancedSearch;
    }

    //removes advanced search 
    private closeAdvancedSearch(){

      this.advancedSearch = false;
      
    }
   
    // Advanced search function  
    private onSearch(value){

      // deletes the empty element in the array 
      Object.keys(value).forEach((key) => (value[key] == "") && delete value[key]);
      
      this.service.jsonToUrl(value);
      this.LaodServiceCall();

    }
}
