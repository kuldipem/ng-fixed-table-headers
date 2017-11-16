import{Pipe,PipeTransform,Injectable} from '@angular/core';
@Pipe({
    name: 'commaAtThousand'
})
@Injectable()
export class CountsPipe implements PipeTransform{

    transform(value:any){
   if( value == " "){
   
    return value;

   }
   
   else if(typeof(value) == "object"){

    return "null";

   }
       else{

    return value.toLocaleString();
   // return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   }
       
     
        
    }

}