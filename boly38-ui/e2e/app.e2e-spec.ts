import { Boly38UiPage } from './app.po';

describe('boly38-ui App', () => {
  let page: Boly38UiPage;

  beforeEach(() => {
    page = new Boly38UiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
