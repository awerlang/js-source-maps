# JS Source Maps

## About

We generally deploy to production a minified and highly transformed js bundle. The process may involve one or more steps until we get the final result.

While this process leads to best performance for end-users, it is a pain to follow the stack traces back to the source code we wrote.

This project attempts to help you out in the process.

## Usage

1. Upload a .js and the corresponding .map file;
2. Paste a stack trace from a production build;
3. Press Transform: will output the translated stack trace to Results

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
