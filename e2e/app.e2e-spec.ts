import { Dcwest67.Github.IoPage } from './app.po';

describe('dcwest67.github.io App', () => {
  let page: Dcwest67.Github.IoPage;

  beforeEach(() => {
    page = new Dcwest67.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
