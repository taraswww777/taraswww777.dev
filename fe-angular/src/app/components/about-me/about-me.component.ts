import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  age: number = 0;

  constructor() {
    const date = new Date();
    const birthday = new Date('03-01-1994');

    const timeDiff = Math.abs(date.getTime() - birthday.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365))
  }

  ngOnInit(): void {
  }

}
