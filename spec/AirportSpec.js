'use strict'

describe ('Airport', () => {
  it("returns an array when .hanger called", () => {
    let airport = new Airport();
    expect(airport.hanger()).toEqual([]);
  });
});
