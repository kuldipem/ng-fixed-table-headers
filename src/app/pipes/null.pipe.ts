import{Pipe,PipeTransform,Injectable} from '@angular/core';
@Pipe({
    name: 'null'
})
@Injectable()
export class NullPipe implements PipeTransform{

    transform(value:any){
   if( value == " "){
   
    return value;

   }
   
   else if(typeof(value) == "object"){

    return "null";

   }else{
       return value;
   }
       

   }
       
     
        
    }

