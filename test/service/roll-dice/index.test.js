const Driver = require('./index.driver.js');

describe('Roll Dice', () => {
  let driver;

  beforeEach(() => {
    driver = new Driver();
  });

  it('rolls should be 1 1 when random is 0 0', () => {
    driver
      .given.randoms(0, 0)
      .roll()
      .result.rolled(1, 1);
  });

  it('rolls should be 1 1 when random is 0.166 0.166', () => {
    driver
      .given.randoms(0.166, 0.166)
      .roll()
      .result.rolled(1, 1);
  });

  it('rolls should be 2 2 when random is 0.167 0.167', () => {
    driver
      .given.randoms(0.167, 0.167)
      .roll()
      .result.rolled(2, 2);
  });

  it('rolls should be 2 2 when random is 0.33 0.33', () => {
    driver
      .given.randoms(0.33, 0.33)
      .roll()
      .result.rolled(2, 2);
  });

  it('rolls should be 3 3 when random is 0.334 0.334', () => {
    driver
      .given.randoms(0.334, 0.334)
      .roll()
      .result.rolled(3, 3);
  });

  it('rolls should be 3 3 when random is 0.499 0.499', () => {
    driver
      .given.randoms(0.499, 0.499)
      .roll()
      .result.rolled(3, 3);
  });

  it('rolls should be 4 4 when random is 0.5 0.5', () => {
    driver
      .given.randoms(0.5, 0.5)
      .roll()
      .result.rolled(4, 4);
  });

  it('rolls should be 4 4 when random is 0.66 0.66', () => {
    driver
      .given.randoms(0.66, 0.66)
      .roll()
      .result.rolled(4, 4);
  });

  it('rolls should be 5 5 when random is 0.667 0.667', () => {
    driver
      .given.randoms(0.667, 0.667)
      .roll()
      .result.rolled(5, 5);
  });

  it('rolls should be 5 5 when random is 0.833 0.833', () => {
    driver
      .given.randoms(0.833, 0.833)
      .roll()
      .result.rolled(5, 5);
  });

  it('rolls should be 6 6 when random is 0.834 0.834', () => {
    driver
      .given.randoms(0.834, 0.834)
      .roll()
      .result.rolled(6, 6);
  });

  it('rolls should be 6 6 when random is 0.99 0.99', () => {
    driver
      .given.randoms(0.99, 0.99)
      .roll()
      .result.rolled(6, 6);
  });
});