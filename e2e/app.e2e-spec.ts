import { ComponentHostPage } from './app.po';

describe('component-host App', () => {
  let page: ComponentHostPage;

  beforeEach(() => {
    page = new ComponentHostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
