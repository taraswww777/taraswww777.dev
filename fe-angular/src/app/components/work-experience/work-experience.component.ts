import {Component, OnInit} from '@angular/core';
import dataWorkExperience from './work-experience.json';

interface WorkExperience {
  dateBegin: string,
  dateEnd: string,
  companyName: string,
  companySite?: string,
  workPosition: string,
  teamName?: string,
  technologiesTags: string[],
  description: string
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: WorkExperience[] = [];

  constructor() {
    this.workExperience = dataWorkExperience;
  }

  ngOnInit(): void {
  }

}
