import { media } from "./media";

export class NoSleep {
  private noSleepVideo: HTMLVideoElement;

  constructor() {
    // Set up no sleep video element
    this.noSleepVideo = document.createElement("video");

    this.noSleepVideo.setAttribute("title", "No Sleep");
    this.noSleepVideo.setAttribute("playsinline", "");

    this._addSourceToVideo(this.noSleepVideo, "webm", media.webm);
    this._addSourceToVideo(this.noSleepVideo, "mp4", media.mp4);

    this.noSleepVideo.addEventListener("loadedmetadata", () => {
      if (this.noSleepVideo.duration <= 1) {
        // webm source
        this.noSleepVideo.setAttribute("loop", "");
      } else {
        // mp4 source
        this.noSleepVideo.addEventListener("timeupdate", () => {
          if (this.noSleepVideo.currentTime > 0.5) {
            this.noSleepVideo.currentTime = Math.random();
          }
        });
      }
    });
  }

  private _addSourceToVideo(
    video: HTMLVideoElement,
    type: string,
    source: string,
  ) {
    const sourceElement = document.createElement("source");
    sourceElement.src = source;
    sourceElement.type = `video/${type}`;
    video.appendChild(sourceElement);
  }

  public enable() {
    this.noSleepVideo.play();
  }

  public disable() {
    this.noSleepVideo.pause();
  }
}
