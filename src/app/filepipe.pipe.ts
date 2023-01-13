import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilepipePipe implements PipeTransform {

  transform(size:number): any {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }

}
