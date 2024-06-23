import { CustomhelloPipe } from './customhello.pipe';

describe('CustomhelloPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomhelloPipe();
    expect(pipe).toBeTruthy();
  });
});
