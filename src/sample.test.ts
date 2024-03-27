import sample from './sample';

describe('sample', () => {
  test('should add two numbers', () => {
    expect(sample(2, 5)).toEqual(7);
  });
});
