import { OutputTarget } from '../Summary';
import fs from 'fs'
import uuid from 'util'

const documentName: string = 'report.html'

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    console.log('Starting to Create Report')
    const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}: ${new Date().toUTCString()}</div>
            </div>
        `;
        fs.writeFileSync(`${documentName}`, html)
        console.log(`Report Created Please check ${documentName}`)

  }
}
