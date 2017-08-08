import { HlloWorldPage } from './app.po';

describe('hllo-world App', () => {
  let page: HlloWorldPage;

  beforeEach(() => {
    page = new HlloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
