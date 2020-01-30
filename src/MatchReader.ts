import { dateStringToDate } from './utils';
import {MatchResult} from './Enums'
import {MatchData} from './MatchData'
import {CsvFileReader} from './CsvFileReader'

interface DataReader{
    read(): void;
    data: string[][]
}

export class MatchReader{
    static fromCsv(filename: string): MatchReader{
        return new MatchReader(new CsvFileReader(filename))
    }


    matches: MatchData[] = [];

    constructor(public reader: DataReader){}

    load(): void{
        this.reader.read()
        this.matches = this.reader.data.map((row: string[]): MatchData => {
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