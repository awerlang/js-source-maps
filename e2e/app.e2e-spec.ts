import { JsSourceMapsPage } from './app.po';

describe('js-source-maps App', () => {
  let page: JsSourceMapsPage;

  beforeEach(() => {
    page = new JsSourceMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
