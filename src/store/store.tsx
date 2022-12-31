import { enableStaticRendering } from "mobx-react-lite"
import { makeAutoObservable } from "mobx"

const isNode = !!process?.versions?.node;

enableStaticRendering(isNode);

type VideoData = {
  readonly src: string;
  readonly youtube?: boolean;
  readonly title?: string;
  readonly thumb?: string;
}

class Store {
  private _video?: VideoData;
  get video() {return this._video}
  set video(v: VideoData | undefined) {this._video = v;}

  private vmt = false;
  get videoMaximizeTrigger(): unknown {return this.vmt}
  triggerMaximize() {this.vmt = !this.vmt;}

  get youtubeEmbed() {
    if (this._video?.src) {
      return "https://www.youtube.com/embed/" + this._video.src
    } else {
      return undefined;
    }
  }

  private _lang: string = "en";
  get lang() { return this._lang; }
  set lang(lang: string) { this._lang = lang }

  private _colorMode: "light" | "dark" = "dark"
  get colorMode() {
    return this._colorMode;
  }
  set colorMode(c: typeof this._colorMode) {
    this._colorMode = c;
    this.setItem("colorMode", c);
  }

  constructor() {
    makeAutoObservable(this);
  }

  private initialized = false;
  initialize(init?: {
    lang?: string;
  }) {
    if (isNode || !this.initialized) {
      this.initialized = true;

      if (init) {
        if (init.lang !== undefined) {
          this.lang = init.lang;
        }
      }
    }
  }

  setItem(key: string, value: string) {
    if (isNode) return;

    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    if (isNode) return null;

    return localStorage.getItem(key);
  }

  private loaded = false;
  loadFromLocal() {
    if (isNode || this.loaded) return;
    this.loaded = true;

    const cm = this.getItem("colorMode");
    if (cm === "light" || cm === "dark") this._colorMode = cm;
  }
}

const store = new Store()

export default store;