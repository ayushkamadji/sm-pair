const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles midday - 12:00", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles 15 - 8:15", () => {
    const timeInWords = convertTimeToWords("8:15");
    expect(timeInWords).toBe("quarter past eight");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles o' clock - 2:00", () => {
    const timeInWords = convertTimeToWords("2:00");
    expect(timeInWords).toBe("two o' clock");
  });

  it("Handles other < 30 - 3:11", () => {
    const timeInWords = convertTimeToWords("3:11");
    expect(timeInWords).toBe("eleven past three");
  });

  it("Handles other > 30 - 2:40", () => {
    const timeInWords = convertTimeToWords("2:40");
    expect(timeInWords).toBe("twenty to three");
  });

  it("Handles other > 30 - 3:55", () => {
    const timeInWords = convertTimeToWords("3:55");
    expect(timeInWords).toBe("five to four");
  });
});
