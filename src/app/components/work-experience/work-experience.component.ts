import {Component, OnInit} from '@angular/core';
import {loadWorkExperience} from 'src/resources/work-experience';
import {WorkExperienceDto} from 'src/types/dto';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: WorkExperienceDto[] = [];
  tags: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    loadWorkExperience().then((workExperience) => {
      this.workExperience = workExperience;

      workExperience.map(({technologiesTags}) => {
        this.tags = [...this.tags, ...technologiesTags];
      });

      console.log('res:[WorkExperienceComponent]:this.tags:', this.tags);
    });
  }
}
