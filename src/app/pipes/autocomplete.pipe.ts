import{Pipe,PipeTransform,Injectable} from '@angular/core';
@Pipe({
    name: 'deleteRepeatedProcessCode'
})
@Injectable()
export class AutoCompletePipe implements PipeTransform{

    transform(value:any){
        var uniqueArray;
        uniqueArray = value.filter(function(item, pos) {
            
            return value.indexOf(item.ProcessCode) == pos.ProcessCode;
        })  

        return uniqueArray;
    }

}