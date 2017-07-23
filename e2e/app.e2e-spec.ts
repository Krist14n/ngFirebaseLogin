import { WesavefoodPage } from './app.po';

describe('wesavefood App', () => {
  let page: WesavefoodPage;

  beforeEach(() => {
    page = new WesavefoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
