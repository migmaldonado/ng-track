import { NgTrackPage } from './app.po';

describe('ng-track App', function() {
  let page: NgTrackPage;

  beforeEach(() => {
    page = new NgTrackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
