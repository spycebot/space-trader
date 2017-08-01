import { SpaceTraderPage } from './app.po';

describe('space-trader App', () => {
  let page: SpaceTraderPage;

  beforeEach(() => {
    page = new SpaceTraderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
