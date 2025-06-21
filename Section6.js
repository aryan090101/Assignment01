//Javascript Date Object

//1. Check if input is a date object
function is_date(input) {
  return Object.prototype.toString.call(input) === "[object Date]" && !isNaN(input.getTime());
}

//2. Current date with separator
function curday(separator) {
  const d = new Date();
  const day = ('0' + d.getDate()).slice(-2);
  const month = ('0' + (d.getMonth() + 1)).slice(-2);
  const year = d.getFullYear();
  return `${month}${separator}${day}${separator}${year}`;
}

//3. Get number of days in month
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

//4. Get month name from date
function month_name(dt) {
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
  return months[dt.getMonth()];
}

//5. Compare two dates
function compare_dates(date1, date2) {
  if (date1.getTime() === date2.getTime()) return "Date1 = Date2";
  return date1 > date2 ? "Date1 > Date2" : "Date2 > Date1";
}

//6. Add minutes to date
function add_minutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

//7. Check weekend
function is_weekend(dateStr) {
  const dt = new Date(dateStr);
  const day = dt.getDay();
  return (day === 0 || day === 6) ? "weekend" : undefined;
}

//8. Difference in dates
function date_diff_indays(date1, date2) {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  const diff = (dt2 - dt1) / (1000 * 60 * 60 * 24);
  return Math.floor(diff);
}

//9. Last day of a month
function lastday(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

//10. Yesterday's date
function yesterday(dateStr) {
  const dt = new Date(dateStr);
  dt.setDate(dt.getDate() - 1);
  return dt;
}

//11. Max date from array
function max_date(dates) {
  return new Date(Math.max(dates.map(d => new Date(d)))).toISOString().split('T')[0].replace(/-/g, '/');
}

//12. Min date from array
function min_date(dates) {
  return new Date(Math.min(dates.map(d => new Date(d)))).toISOString().split('T')[0].replace(/-/g, '/');
}

//13. Convert minutes to hours/minutes
function timeConvert(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${minutes} minutes = ${hours} hour(s) and ${mins} minute(s).`;
}

//14. Days in a year
function days_of_a_year(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 366 : 365;
}

//15. Quarter of year
function quarter_of_the_year(date) {
  return Math.floor(date.getMonth() / 3) + 1;
}

//16. Days passed since start of year
function days_passed(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.floor((date - start) / (1000 * 60 * 60 * 24)) + 1;
}

//17. Unix timestamp to time
function unix_to_time(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toTimeString().split(' ')[0];
}

//18. Calculate age
function calculate_age(yob,mob,dob) {
  const today = new Date();
  let age = today.getFullYear() - yob;
  const m = today.getMonth()+1 - mob;
  if (m < 0 || (m === 0 && today.getDate() < dob)) {
    age--;
  }
  return age;
}

//19. Day of month
function day_of_the_month(date) {
  return ('0' + date.getDate()).slice(-2);
}

//20. Textual week
function short_Days(date) {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
}

//21. Full Textual Week
function long_Days(date) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
}

//22. ISOnumeric
function ISO_numeric_date(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

//23. English Ordinal Suffix
function english_ordinal_suffix(date) {
  const day = date.getDate();
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
}

//24. ISO week number
function ISO8601_week_no(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}

//25. Full Textual Rep of month
function full_month(date) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months[date.getMonth()];
}

//26. Numeric month
function numeric_month(date) {
  return ('0' + (date.getMonth() + 1)).slice(-2);
}

//27. Short months
function short_months(date) {
  const shortMonths = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return shortMonths[date.getMonth()];
}

//28. Get full year
function full_year(date) {
  return date.getFullYear();
}

//29. Short year
function sort_year(date) {
  return date.getFullYear().toString().slice(-2);
}

//30. lowercase am/pm
function lower_meridiem(date) {
  return date.getHours() >= 12 ? 'pm' : 'am';
}

//31. Uppercase AM/PM
function upper_meridiem(date) {
  return date.getHours() >= 12 ? 'PM' : 'AM';
}

//32. Swatch Internet time
function internet_time(date) {
  const UTC = date.getUTCHours() * 3600 + date.getUTCMinutes() * 60 + date.getUTCSeconds();
  return Math.floor(((UTC + 3600) % 86400) / 86.4);
}

//33. 12 hour format
function hours_with_zeroes(date) {
  const h = date.getHours() % 12 || 12;
  return ('0' + h).slice(-2);
}

//34. 24 hour format
function hours_without_zeroes(date) {
  return date.getHours();
}

//35. Minutes with leading 0s
function minutes_with_leading_zeros(date) {
  return ('0' + date.getMinutes()).slice(-2);
}

//36. Seconds with leading 0s
function seconds_with_leading_zeros(date) {
  return ('0' + date.getSeconds()).slice(-2);
}

//37. Timezone
function get_timezone(date) {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

//38. Daylight saving time
function daylights_savings(date) {
  const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return date.getTimezoneOffset() < Math.max(jan, jul) ? 1 : 0;
}

//39. Difference to GMT
function diff_to_GMT(date) {
  const offset = -date.getTimezoneOffset() / 60;
  return (offset >= 0 ? "+" : "") + offset.toFixed(3);
}

//40. Timezone offset in sec
function timezone_offset_in_seconds(date) {
  return -date.getTimezoneOffset() * 60;
}

//41. Add specified years to date
function add_years(date, years) {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}

//42. Add specified weeks to date
function add_weeks(date, weeks) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + weeks * 7);
  return newDate;
}

//43. Add specified months to date
function add_months(date, months) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

//44. Time diff in minutes
function diff_minutes(dt1, dt2) {
  return Math.round((dt2 - dt1) / (1000 * 60));
}

//45. Time diff in hours
function diff_hours(dt1, dt2) {
  return Math.round((dt2 - dt1) / (1000 * 60 * 60));
}

//46. Diff in days
function diff_days(dt1, dt2) {
  return Math.round((dt2 - dt1) / (1000 * 60 * 60 * 24));
}

//47. Diff in weeks
function diff_weeks(dt1, dt2) {
  return Math.round((dt2 - dt1) / (1000 * 60 * 60 * 24 * 7));
}

//48. Diff in months
function diff_months(dt1, dt2) {
  return (dt2.getFullYear() - dt1.getFullYear()) * 12 + (dt2.getMonth() - dt1.getMonth());
}

//49. Diff in years
function diff_years(dt1, dt2) {
  return dt2.getFullYear() - dt1.getFullYear();
}

//50. Week start date
function week_start(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - (day === 0 ? 6 : day - 1);
  return new Date(d.setDate(diff));
}

//51. Week end date
function week_end(date) {
  const start = week_start(date);
  return new Date(start.getFullYear(), start.getMonth(), start.getDate() + 6);
}

//52. Month start date
function month_start(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

//53. Month end date
function month_end(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
