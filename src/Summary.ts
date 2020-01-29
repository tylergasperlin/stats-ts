import { MatchData } from './MatchData';
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {ConsoleReport} from './reportTargets/ConsoleReport'

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

//summary is a coordinator 
//sumarry has a reference to two interfaces outputtarget and analyzer
//analyzer and outputtarget are initalized when summary class is initalized
//summary uses properties of outputtarget and analyzer in its method build and printreport
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output)
  }

}

