import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput: FormControl = new FormControl();

  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(
        e => console.log(e),
        err => console.error(err),
        () => console.log('done')
      );
  }

  ngOnInit() {
  }

}
