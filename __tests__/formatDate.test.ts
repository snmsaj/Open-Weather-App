import formatDate from "@/utils/formatDate";

describe("formatDate", () => {
  it("should format a given unix timestamp to a 2-digit hour and minute time string", () => {
    const unixTimestamp = 1649150400;
    const expectedOutput = "05:20 AM";
    expect(formatDate(unixTimestamp)).toEqual(expectedOutput);
  });

  it("should return null when time is undefined", () => {
    expect(formatDate(undefined)).toBeNull();
  });

  it("should return null when time is not a number", () => {
    expect(formatDate("not a number" as any)).toBeNull();
  });
});
