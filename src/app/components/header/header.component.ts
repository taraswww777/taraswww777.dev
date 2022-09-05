import { Component } from '@angular/core';
import {faArrowTrendUp, faArrowTrendDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icons = {
    faArrowTrendUp,
    faArrowTrendDown
  }
}
