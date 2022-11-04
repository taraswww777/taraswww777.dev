import {Component, OnInit} from '@angular/core';
import {isEmpty} from 'lodash';
import {loadWorkExperience} from 'src/resources/work-experience';
import {WorkExperienceDto} from 'src/types/dto';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  public workExperience: WorkExperienceDto[] = [];
  public tags: string[] = [];

  public get isShowCloudTags(): boolean {
    return !isEmpty(this.tags) && !this.isMobile();
  }

  isMobile(): boolean {
    return window.screen.width < 768;
  }

  ngOnInit(): void {
    this.workExperience = loadWorkExperience();

    this.workExperience.forEach(({technologiesTags}) => {
      this.tags = [...this.tags, ...technologiesTags];
    });
  }
}
