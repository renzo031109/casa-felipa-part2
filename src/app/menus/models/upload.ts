export class Upload {
  $key: string;

  menuName: string;
  description: string;
  group: string;
  price: number;

  file: File;
  name: string;
  url: string;
  progress: number;

  // createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }

}