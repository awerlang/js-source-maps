import { Component, ViewChild, ElementRef } from '@angular/core';
import * as ErrorStackParser from 'error-stack-parser';
import StackTraceGPS from 'stacktrace-gps';

import { readFile } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stackTrace = '';
  transformed = '';

  @ViewChild('sourceFiles') sourceFiles: ElementRef;

  readFiles() {
    const files: File[] = [].slice.call(this.sourceFiles.nativeElement.files);
    const sources = files.map(async (file) => {
      return {
        filename: file.name,
        source: await readFile(file),
      };
    });

    return Promise.all(sources);
  }

  async transform() {
    const paths = /https?:\/\/[^:]+/g.exec(this.stackTrace);
    const files = await this.readFiles();
    const jsFile = files.find(it => it.filename.endsWith('.js'));
    const mapFile = files.find(it => it.filename.endsWith('.map'));
    const error: any = {
      stack: this.stackTrace.split(paths[0]).join(jsFile.filename),
    };
    const frames = ErrorStackParser.parse(error);
    const gps = new StackTraceGPS({
      offline: true,
      sourceCache: {
        [jsFile.filename]: jsFile.source,
        [mapFile.filename]: mapFile.source,
      },
    });
    const result = await Promise.all(
      frames.map(sf => gps.pinpoint(sf).catch(() => sf)));
    this.transformed = result.join('\n');
  }
}
