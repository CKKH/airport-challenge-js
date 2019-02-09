'use strict'

describe ('Airport', () => {
  it("instance of Airport can be instantiated", () => {
    let airport = new Airport();
    expect(airport instanceof Airport).toBeTruthy();
  });

  it("responds to .hanger", () => {
    let airport = new Airport();
    expect(airport.hanger()).toBeDefined();
  });

  it("returns an array when .hanger called", () => {
    let airport = new Airport();
    expect(airport.hanger()).toEqual([]);
  });
});
