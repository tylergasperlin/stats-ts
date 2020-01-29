import fs from 'fs';
import { dateStringToDate } from '../../utils';
import {MatchResult} from '../../Enums'

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8' //utf8 is a string of data
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      }).map((row: string[]): MatchData => {
          //after row is split we map again to parse out values of the row
        return [
            //data within the row is in a standard format so we can run some processing on the original values and return a new array
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            //type assertion. TS does not know what is in this array but we do so we tell ts what type is expected
            row[5] as MatchResult,
            row[6]
        ]
      })
  }
}
