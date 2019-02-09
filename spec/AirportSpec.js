'use strict'

describe ('Airport', () => {
  it("instance of Airport can be instantiated", () => {
    let airport = new Airport();
    expect(airport instanceof Airport).toBeTruthy();
  });
});
