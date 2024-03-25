import { Pipe, PipeTransform } from '@angular/core';
import {  formatDistanceToNow } from 'date-fns';


@Pipe({
  name: 'timeAgo',
  standalone: true,
  pure: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value:Date): string {
    if (value) {
      return formatDistanceToNow(value, { addSuffix: true });
    }
    return '';
  }

}
