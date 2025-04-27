import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let comp: HomeComponent;

  beforeEach(() => {
    comp = new HomeComponent();
  });

  it('component is created', () => {
    expect(comp).toBeTruthy();
  });
});
