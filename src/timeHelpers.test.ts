import { addTimeDelta, subtractTimeDelta } from "./timeHelpers";

import { TimeDelta } from "./types/TimeDelta";

const baseTimeDelta: TimeDelta = {
  hours: 0,
  days: 0,
  weeks: 0,
  months: 0,
  years: 0,
};

describe("future time calc", () => {
  it("handles hours", () => {
    const current = new Date();
    const result = addTimeDelta(new Date(), {
      ...baseTimeDelta,
      hours: 1,
    });
    expect(result.getTime()).toBe(current.setHours(current.getHours() + 1));
  });
  it("handles days", () => {
    const current = new Date();
    const result = addTimeDelta(new Date(), {
      ...baseTimeDelta,
      days: 1,
    });
    expect(result.getTime()).toBe(current.setDate(current.getDate() + 1));
  });
  it("handles weeks", () => {
    const current = new Date();
    const result = addTimeDelta(new Date(), {
      ...baseTimeDelta,
      weeks: 1,
    });
    expect(result.getTime()).toBe(current.setDate(current.getDate() + 7));
  });
  it("handles months", () => {
    const current = new Date();
    const result = addTimeDelta(new Date(), {
      ...baseTimeDelta,
      months: 1,
    });
    expect(result.getTime()).toBe(current.setMonth(current.getMonth() + 1));
  });
  it("handles years", () => {
    const current = new Date();
    const result = addTimeDelta(new Date(), {
      ...baseTimeDelta,
      years: 1,
    });
    expect(result.getTime()).toBe(
      current.setFullYear(current.getFullYear() + 1)
    );
  });
});

describe("past time calc", () => {
  it("handles hours", () => {
    const current = new Date();
    const result = subtractTimeDelta(new Date(), {
      ...baseTimeDelta,
      hours: 1,
    });
    expect(result.getTime()).toBe(current.setHours(current.getHours() - 1));
  });
  it("handles days", () => {
    const current = new Date();
    const result = subtractTimeDelta(new Date(), {
      ...baseTimeDelta,
      days: 1,
    });
    expect(result.getTime()).toBe(current.setDate(current.getDate() - 1));
  });
  it("handles weeks", () => {
    const current = new Date();
    const result = subtractTimeDelta(new Date(), {
      ...baseTimeDelta,
      weeks: 1,
    });
    expect(result.getTime()).toBe(current.setDate(current.getDate() - 7));
  });
  it("handles months", () => {
    const current = new Date();
    const result = subtractTimeDelta(new Date(), {
      ...baseTimeDelta,
      months: 1,
    });
    expect(result.getTime()).toBe(current.setMonth(current.getMonth() - 1));
  });
  it("handles years", () => {
    const current = new Date();
    const result = subtractTimeDelta(new Date(), {
      ...baseTimeDelta,
      years: 1,
    });
    expect(result.getTime()).toBe(
      current.setFullYear(current.getFullYear() - 1)
    );
  });
});
