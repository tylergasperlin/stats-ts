import {CsvFileReader} from './CsvFileReader'
import { dateStringToDate } from './utils';
import {MatchResult} from './Enums'

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends CsvFileReader{
    mapRow(row: string[]): MatchData{
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
    }
}