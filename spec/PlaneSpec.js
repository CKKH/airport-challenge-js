'use strict'

describe ('Plane', () => {
  it("instance of Plane can be instantiated", () => {
    let plane = new Plane();
    expect(plane instanceof Plane).toBeTruthy();
  })
});
