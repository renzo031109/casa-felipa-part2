export class Upload {
  $key: string;

  menuName: string;
  description: string;
  group: string;
  price: string;

  file: File;
  name: string;
  url: string;
  progress: number;

  // createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }

}