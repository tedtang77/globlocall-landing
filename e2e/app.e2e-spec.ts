import { GloblocallLandingPage } from './app.po';

describe('globlocall-landing App', () => {
  let page: GloblocallLandingPage;

  beforeEach(() => {
    page = new GloblocallLandingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
