import fs from 'fs';


//T is an argument for generic types 
//T can be anything we want but by convention we use T
//note that we use an abstract class and a generic at the same time
//abstract class ensures that we implement on the initializing of csvfilereader
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;


  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8' //utf8 is a string of data
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      }).map(this.mapRow)
  }
}
