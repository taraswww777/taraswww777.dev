import {DOCUMENT} from '@angular/common';
import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';
import Color from 'color';
import {toNumber} from 'lodash';

const TAGS: string[] = [
  'Javascript',
  'React',
  'Typescript',
  'node',
  'HTML5',
  'CSS3',
  'MsSQL',
  'webpack',
  'jest',
  'ModuleFederation',
  'Bitbucket',
  'TeamCity',
  'Confluence',
  'express',
  'Javascript',
  'React',
  'Typescript',
  'node',
  'HTML5',
  'CSS3',
  'MsSQL',
  'webpack',
  'jest',
  'ModuleFederation',
  'Bitbucket',
  'TeamCity',
  'Confluence',
  'express',
  'Docker',
  'Nginx',
  'Javascript',
  'React',
  'Typescript',
  'scss',
  'flow',
  'HTML5',
  'CSS3',
  'MsSQL',
  'webpack',
  'jest',
  'ModuleFederation',
  'Bitbucket',
  'TeamCity',
  'Confluence',
  'jenkins',
  'GitLab',
  'kubernetes',
  'Javascript',
  'knockoutjs',
  'flow',
  'HTML5',
  'less',
  'scss',
  'jira',
  'GitLab',
  'TeamCity',
  'PHP7.2',
  'HTML5',
  'CSS3',
  'MySQL',
  '1C Bitrix',
  'Opencart',
  'Joomla',
  'Drupal',
  'MODX',
  'Laravel5',
  'Javascript',
  'PHP7.2',
  'HTML5',
  'CSS3',
  'MySQL',
  'Symfony',
  '1C Bitrix',
  'GIT',
  'BEM',
  'Laravel5',
  'tao3',
  'bitrix.tao',
  'Javascript',
  'gulp',
  'webpack',
  'PHP7.2',
  'HTML5',
  'CSS3',
  'MySQL',
  'PgSQL',
  'Symfony',
  'Yii2',
  'Laravel5',
  'Centos',
  'Javascript',
  'PHP5.6',
  'HTML5',
  'CSS3',
  'MySQL',
  'Wordpress',
  '1C Bitrix',
  'Opencart',
  'XML',
  'GIT'
];
const BASE_FONTSIZE_TAG = 14;
const BASE_COLOR = Color('#ff0000');
const DEFAULT_WINDOW_SIZE = 320;

@Component({
  selector: 'app-cloud-tags',
  inputs: ['tags'],
  templateUrl: './cloud-tags.component.html',
  styleUrls: ['./cloud-tags.component.scss']
})
export class CloudTagsComponent implements OnInit, OnDestroy {
  data: CloudData[] = [];

  tags: string[] = [];
  options: CloudOptions = {
    width: DEFAULT_WINDOW_SIZE,
    height: 400,
    overflow: true,
    zoomOnHover: {scale: 1.5, transitionTime: 0.5, delay: 0.025}
  };

  private metaTags: Record<string, CloudData> = {};


  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document
  ) {
    addEventListener('resize', this.onWindowResize.bind(this));

    // this.updateWidthCloud(toNumber(this.documentRef.body.clientHeight) - 100 || DEFAULT_WINDOW_SIZE);
  }

  ngOnDestroy() {
    removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize(event: Event) {
    // @ts-ignore
    this.updateWidthCloud(toNumber(event?.currentTarget?.innerWidth) - 100 || DEFAULT_WINDOW_SIZE)
  }

  ngOnInit(): void {
    this.metaTags = {};

    TAGS.forEach((tag) => {
      const weight = BASE_FONTSIZE_TAG + (this.metaTags[tag]?.weight || 1);
      this.metaTags[tag] = {
        text: tag,
        weight,
        color: BASE_COLOR.red(weight).string()
      };
    });

    Object.keys(this.metaTags).forEach(key => {
      this.data.push(this.metaTags[key]);
    });
  }

  updateWidthCloud(width: number = DEFAULT_WINDOW_SIZE) {
    this.options.width = width >= DEFAULT_WINDOW_SIZE ? width : DEFAULT_WINDOW_SIZE;
  }
}
