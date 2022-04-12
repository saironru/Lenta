import { Pipe, PipeTransform } from '@angular/core';
import { News } from './news.service';

@Pipe({name:'sort'})
export class SortPipe implements PipeTransform {

transform(items: News[], direction: boolean, column: string): News[] {
  if (column === 'none') return items;

  let sortedItems=[];
  sortedItems = direction ? this.sortAscending(items, column): this.sortDescending(items, column)
  return sortedItems;
}

sortAscending(items: News[], column: string): News[] {
  let comparator = function(a:any, b:any): number{
    let aS = a[column];
    let bS = b[column];
    if (column === 'isoDate') {
      aS = Date.parse(aS);
      bS = Date.parse(bS);
      return aS - bS;
    } else if (column === 'title') {
      let collator = new Intl.Collator(undefined, {
        sensitivity: "accent"
      });
      return collator.compare(bS, aS);
    } else {
      return 0;
    }
    }
return [...items.sort(comparator)]
}

sortDescending(items: News[], column: string): News[] {
  let comparator = function(a:any, b:any): number{
    let aS = a[column];
    let bS = b[column];
    if (column === 'isoDate') {
      aS = Date.parse(aS);
      bS = Date.parse(bS);
      return  bS - aS;
    } else if (column === 'title') {
      let collator = new Intl.Collator(undefined, {
        sensitivity: "accent"
      });
      return collator.compare(aS, bS);
    } else {
      return 0;
    }
    }
return [...items.sort(comparator)]
}

}