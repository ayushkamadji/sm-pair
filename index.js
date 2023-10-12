// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  let result = "";
  const [hour, minute] = time.split(":");

  const hourString = getTimeNumberToString(hour);

  if (minute === "00") {
    result = `${hourString} o' clock`;
    return result;
  }

  if (minute === "15") {
    result = `quarter past ${hourString}`;
    return result;
  }

  const nextHourString = getTimeNumberToString((Number(hour) + 1).toString());

  if (minute === "45") {
    result = `quarter to ${nextHourString}`;
    return result;
  }

  if (Number(minute) <= 30) {
    const minuteString = getTimeNumberToString(minute);
    result = `${minuteString} past ${hourString}`;
    return result;
  }

  const remainingMinutes = 60 - Number(minute);
  const remainingMinutesString = getTimeNumberToString(remainingMinutes);
  result = `${remainingMinutesString} to ${nextHourString}`;

  return result;
}

function getTimeNumberToString(hour) {
  const hourToStringMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "half",
  };

  return hourToStringMap[Number(hour)];
}

module.exports = { convertTimeToWords };
