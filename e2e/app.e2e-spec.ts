import { UETHRClientAppPage } from './app.po';

describe('uet-hr-client-app App', function() {
  let page: UETHRClientAppPage;

  beforeEach(() => {
    page = new UETHRClientAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
