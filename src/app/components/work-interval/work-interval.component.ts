import {Component, Input, OnInit} from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-work-interval',
  inputs: ['dateBegin', 'dateEnd'],
  templateUrl: './work-interval.component.html',
  styleUrls: ['./work-interval.component.scss']
})
export class WorkIntervalComponent implements OnInit {
  @Input() dateBegin: string = '';
  @Input() dateEnd: string = '';

  public y?: number = 0;
  public m?: number = 0;

  ngOnInit() {
    const b = moment(this.dateBegin);
    const e = moment(this.dateEnd);
    const diffMonth = e.diff(b, 'months');
    this.y = Math.trunc(Math.abs(diffMonth / 12));
    this.m = diffMonth - this.y * 12;
  }
}
