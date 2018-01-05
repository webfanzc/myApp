import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {interpretStatements} from '@angular/compiler/src/output/output_interpreter';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
  stars: boolean[];
  @Input()
  private readonly: boolean = true;
  @Input()
  rating = 0;
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();

  constructor() {
  }
  ngOnChanges(){
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
  countStars(index: number) {
    if (this.readonly) {
      return;
    }
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
  }

  ngOnInit() {

  }

}
