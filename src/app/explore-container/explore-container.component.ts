import { Component, OnInit, Input } from '@angular/core';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' + 
              ', seddo eiusmod tempor incididunt ut labore et dolore magna ' + 
              'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' + 
              'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ' + 
              'aute irure dolor in reprehenderit in voluptate velit esse ' + 
              'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' + 
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit ' +
              'anim id est laborum.';

const images: string[] = [
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile'
];

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  public items: any[] = [];

  private rotateImg: number = 0;

  constructor() { 
    console.log(`creating: ${this.constructor.name}`);
  }

  public myHeaderFn(record, recordIndex, records):string {
    if (recordIndex % 20 === 0) {
      return 'Header ' + recordIndex;
    }
    return null;
  }

  ngOnInit() {
    console.log(`ngOnInit: ${this.constructor.name}`);
    this.generateStubData();
  }

  private generateStubData():void {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        name: i + ' - ' + images[this.rotateImg],
        imgSrc: this.getImgSrc(),
        avatarSrc: this.getImgSrc(),
        imgHeight: Math.floor(Math.random() * 50 + 150),
        content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
      });

      this.rotateImg++;
      if (this.rotateImg === images.length) {
        this.rotateImg = 0;
      }
    }
  }

  private getImgSrc():string {
    const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
    this.rotateImg++;
    if (this.rotateImg === images.length) {
      this.rotateImg = 0;
    }
    return src;
  }

  public delete(item):void {
    console.log(`delete: ${JSON.stringify(item)}`);
    document.getElementById(item.name).style.display = 'none';
    this.items.splice(this.items.indexOf(item), 1);
  }
}







