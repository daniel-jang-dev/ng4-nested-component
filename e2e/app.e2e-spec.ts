import { NgNestPage } from './app.po';

describe('ng-nest App', () => {
  let page: NgNestPage;

  beforeEach(() => {
    page = new NgNestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
