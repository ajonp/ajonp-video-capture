import { Component, Element } from '@stencil/core';


@Component({
  tag: 'ajonp-video-capture',
  styleUrl: 'ajonp-video-capture.scss'
})
export class AjonpVideoCapture {

  @Element() el: HTMLElement;

  componentDidLoad() {
    if ('mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      }).then((stream) => {
        const video = this.el.querySelector('video');
        video.srcObject = stream;
      });
    }
  }

  render() {
    return (
      <div class="ajonp-video-capture-holder">
        <video autoplay></video>
      </div>
    );
  }
}