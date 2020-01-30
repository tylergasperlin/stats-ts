import {OutputTarget} from '../Summary'

export class ConsoleReport implements OutputTarget{
    print(report: string): void{
        console.log('PRINTING CONSOLE REPORT')
        console.log(report)
    }
}