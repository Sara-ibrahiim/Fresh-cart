 import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(title: string, limit: number): string {
    return title.split(' ').slice(0,limit).join(' ');
  }

}
