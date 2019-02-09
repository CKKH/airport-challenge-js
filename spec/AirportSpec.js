'use strict'

describe ('Airport', () => {
  it("returns an array when .hanger called", () => {
    let airport = new Airport();
    expect(airport.hanger()).toEqual([]);
  });

  it("responds to .land(plane)", () => {
    let airport = new Airport();
    let plane = jasmine.createSpy('plane')
    expect(airport.land(plane)).toBeDefined();
  });

});
