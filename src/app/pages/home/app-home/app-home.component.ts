import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
})
export class AppHomeComponent implements AfterViewInit {
  //PROPERTIES
  show: boolean = true;
  toggle: boolean = true;
  @ViewChild('video') video!: ElementRef;

  ///////////////////////CYCLE
  ngAfterViewInit(): void {
    this.playVideo();
  }

  ///////////////////////METHODS
  // toDO===>>>>
  muteVideo(video: HTMLVideoElement) {
    video.muted = !video.muted;
  }
  playVideo() {
    this.video.nativeElement.addEventListener('canplay', () => {
      this.show = false;
      this.video.nativeElement.muted = true;
      this.video.nativeElement.play();
    });
  }

  //// DONE
  toggleFn(video: HTMLVideoElement) {
    this.toggle = !this.toggle;
    this.toggle ? video.play() : video.pause();
  }

  /////////////for test
  getArrForTest(length: number) {
    return Array.from({ length: length });
  }
}
