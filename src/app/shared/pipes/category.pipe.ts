import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Pessoa Juridica': return 'work';
      case 'Pessoa Fisica': return 'Group';
    }
    return 'code';
  }


}
