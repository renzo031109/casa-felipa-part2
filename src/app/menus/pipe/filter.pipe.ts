import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(menu: any[], category: string): any {

    if(category === 'All'){
      return menu    
    }
    else
      return menu.filter(category => category.group === category);
  }  
}
