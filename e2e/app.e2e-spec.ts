import { DevNgYinPage } from './app.po';

describe('dev-ng-yin App', function() {
  let page: DevNgYinPage;

  beforeEach(() => {
    page = new DevNgYinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
