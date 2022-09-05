import {DOCUMENT} from '@angular/common';
import {Component, Inject, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';
import Color from 'color';
import {toNumber} from 'lodash';

const BASE_FONTSIZE_TAG = 14;
const BASE_COLOR = Color('#ff0000');
const DEFAULT_WINDOW_SIZE = 320;

@Component({
  selector: 'app-cloud-tags',
  templateUrl: './cloud-tags.component.html',
  styleUrls: ['./cloud-tags.component.scss']
})
export class CloudTagsComponent implements OnChanges, OnDestroy {
  @Input() cloudTags: any[] = [];

  public cloudData: CloudData[] = [];

  public options: CloudOptions = {
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

    this.updateWidthCloud(toNumber(this.documentRef.body.clientHeight) - 100 || DEFAULT_WINDOW_SIZE);
  }

  ngOnDestroy() {
    removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize(event: Event) {
    // @ts-ignore
    this.updateWidthCloud(toNumber(event?.currentTarget?.innerWidth) - 100 || DEFAULT_WINDOW_SIZE)
  }

  ngOnChanges(): void {
    this.metaTags = {};
    const cloudData: CloudData[] = [];

    this.cloudTags.forEach((tag) => {
      const weight = BASE_FONTSIZE_TAG + (this.metaTags[tag]?.weight || 1);
      this.metaTags[tag] = {
        text: tag,
        weight,
        color: BASE_COLOR.red(weight).string()
      };
    });

    Object.keys(this.metaTags).forEach(key => {
      cloudData.push(this.metaTags[key]);
    });

    this.cloudData = cloudData;
  }

  updateWidthCloud(width: number = DEFAULT_WINDOW_SIZE) {
    this.options.width = width >= DEFAULT_WINDOW_SIZE ? width : DEFAULT_WINDOW_SIZE;
  }
}