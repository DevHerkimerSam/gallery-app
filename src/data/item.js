export class Item {
  id;
  title;
  medium;
  cron;
  note;
  imageThumb;
  imageMobile;
  imageFull;
  alt;

  constructor(
    {id=0,
    title="",
    medium="",
    time="unknown",
    note="",
    imageThumb="",
    imageMobile="",
    imageFull="",
    alt=""}={})
    {
    this.id = id;
    this.title = title;
    this.medium = medium;
    this.time = time;
    this.note = note;
    this.imageThumb = imageThumb;
    this.imageMobile = imageMobile;
    this.imageFull = imageFull;
    this.alt = alt;
  }
}