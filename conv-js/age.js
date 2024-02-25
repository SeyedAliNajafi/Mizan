// const calcBtn = document.querySelector(".calc-btn");
// calcBtn.addEventListener("click", function () {
//   const errorMsg = document.querySelector(".error");
//   const ageFull = document.querySelector(".age");
//   const ageDays = document.querySelector(".age-days");
//   const bdShamsi = document.querySelector(".bd-shamsi");
//   const bdMiladi = document.querySelector(".bd-miladi");
//   const bdGhamari = document.querySelector(".bd-ghamari");
//   const yearAnimal = document.querySelector(".year-animal");
//   const ageResult = document.querySelector(".age-result");
//   const tillBd = document.querySelector(".till-bd");
//   //* birthday calc
//   const dayWithNoPad = document.getElementById("d").value;
//   let day = document.getElementById("d").value.padStart(2, "0");
//   let month = document.getElementById("m").value.padStart(2, "0");
//   const year = document.getElementById("y").value;
//   const birthDate = year + "/" + month + "/" + day;
//   console.log(birthDate);
//   //* شمسی به میلادی
//   moment().locale("fa").format("YYYY/M/D");
//   const bdMiladiValue = moment
//     .from(birthDate, "fa", "YYYY/MM/DD")
//     .format("YYYY-MM-DD");
//   console.log(bdMiladiValue);
//   const testArray = bdMiladiValue.split("-");
//   const monthMiladiNum = testArray[1];
//   const dayMiladiNum = testArray[2];
//   const yearMiladiNum = testArray[0];
//   ageResult.classList.remove("result-hidden");
//   ageResult.style.opacity = '1'
//   //* month
//   let monthPersian;
//   if (month == "01") {
//     monthPersian = "فروردین";
//   }
//   if (month == "02") {
//     monthPersian = "اردیبهشت";
//   }
//   if (month == "03") {
//     monthPersian = "خرداد";
//   }
//   if (month == "04") {
//     monthPersian = "تیر";
//   }
//   if (month == "05") {
//     monthPersian = "مرداد";
//   }
//   if (month == "06") {
//     monthPersian = "شهریور";
//   }
//   if (month == "07") {
//     monthPersian = "مهر";
//   }
//   if (month == "08") {
//     monthPersian = "آبان";
//   }
//   if (month == "09") {
//     monthPersian = "آذر";
//   }
//   if (month == "10") {
//     monthPersian = "دی";
//   }
//   if (month == "11") {
//     monthPersian = "بهمن";
//   }
//   if (month == "12") {
//     monthPersian = "اسفند";
//   }

//   let monthMiladi;
//   if (monthMiladiNum == "01") {
//     monthMiladi = "January";
//   }
//   if (monthMiladiNum == "02") {
//     monthMiladi = "February";
//   }
//   if (monthMiladiNum == "03") {
//     monthMiladi = "March";
//   }
//   if (monthMiladiNum == "04") {
//     monthMiladi = "April";
//   }
//   if (monthMiladiNum == "05") {
//     monthMiladi = "May";
//   }
//   if (monthMiladiNum == "06") {
//     monthMiladi = "June";
//   }
//   if (monthMiladiNum == "07") {
//     monthMiladi = "July";
//   }
//   if (monthMiladiNum == "08") {
//     monthMiladi = "August";
//   }
//   if (monthMiladiNum == "09") {
//     monthMiladi = "September";
//   }
//   if (monthMiladiNum == "10") {
//     monthMiladi = "October";
//   }
//   if (monthMiladiNum == "11") {
//     monthMiladi = "November";
//   }
//   if (monthMiladiNum == "12") {
//     monthMiladi = "December";
//   }
//   console.log(monthPersian, monthMiladi);
//   //* days from your birhday
//   // تاریخ مورد نظر (مثلاً تاریخ امروز)
//   const targetDate = new Date(bdMiladiValue); // تاریخ مورد نظر را اینجا وارد کنید

//   // تاریخ فعلی
//   const currentDate = new Date();

//   // محاسبه مدت زمان گذشته (به میلی‌ثانیه)
//   const timeDifference = currentDate - targetDate;

//   // تبدیل مدت زمان به روز
//   const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
//   // console.log(`${daysDifference.toFixed()} روز گذشته`);

//   // age in years , months , days

//   // تابعی برای تبدیل تعداد روز به سال، ماه و روز
//   function daysToYearsMonthsDays(days) {
//     // تعداد روز را به سال، ماه و روز تبدیل می‌کنیم
//     const years = Math.floor(days / 365);
//     const remainingDays = days % 365;
//     const months = Math.floor(remainingDays / 30);
//     const remainingDaysInMonth = Math.ceil(remainingDays % 30);

//     // return {
//     //   years: years,
//     //   months: months,
//     //   days: remainingDaysInMonth,
//     // };
//     if (years == 0) {
//       ageFull.innerHTML = `${months} ماه و ${remainingDaysInMonth} و روز`;
//     } else {
//       ageFull.innerHTML = `${years} سال و ${months} ماه و ${remainingDaysInMonth} و روز`;
//     }
//   }
//   // console.log(daysToYearsMonthsDays(daysDifference));
//   //* مشخص کردن روز هفته
//   function getDayOfWeek(dateString) {
//     const daysOfWeek = [
//       "شنبه",
//       "یک‌شنبه",
//       "دوشنبه",
//       "سه‌شنبه",
//       "چهارشنبه",
//       "پنج‌شنبه",
//       "جمعه",
//     ];

//     const date = new Date(dateString);
//     let dayOfWeek = date.getDay();

//     // تغییر شنبه به عنوان روز اول هفته
//     dayOfWeek = (dayOfWeek + 1) % 7;
//     return daysOfWeek[dayOfWeek];
//   }
//   function getDayOfWeekMiladi(dateString) {
//     const daysOfWeek = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     const date = new Date(dateString);
//     let dayOfWeek = date.getDay();

//     // تغییر شنبه به عنوان روز اول هفته
//     return daysOfWeek[dayOfWeek];
//   }
//   console.log(getDayOfWeek(bdMiladiValue));

//   //* Animal of the year
//   function findChineseZodiac(year) {
//     const animals = [
//       "موش",
//       "گاو",
//       "ببر",
//       "خرگوش",
//       "اژدها",
//       "مار",
//       "اسب",
//       "گوسفند",
//       "میمون",
//       "مرغ",
//       "سگ",
//       "خوک",
//     ];
//     const zodiacIndex = (year - 7) % 12; // باقی‌مانده تقسیم بر ۱۲

//     return animals[zodiacIndex];
//   }
//   console.log(findChineseZodiac(year));
//   //* till birthdate
//   function daysUntilNextBirthday(birthdate) {
//     // Convert the birthdate string to a Date object
//     const birthDateObject = new Date(birthdate);

//     // Get the current date
//     const currentDate = new Date();

//     // Set the birthdate for the current year
//     const currentYearBirthday = new Date(
//       currentDate.getFullYear(),
//       birthDateObject.getMonth(),
//       birthDateObject.getDate()
//     );

//     // Check if the birthday has already occurred this year
//     if (currentDate > currentYearBirthday) {
//       // If yes, set the birthday for the next year
//       currentYearBirthday.setFullYear(currentDate.getFullYear() + 1);
//     }

//     // Calculate the difference in milliseconds
//     const timeDifference =
//       currentYearBirthday.getTime() - currentDate.getTime();

//     // Convert the time difference to days
//     const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//     return daysRemaining;
//   }
//   console.log(daysUntilNextBirthday(bdMiladiValue));
//   //* result
//   daysToYearsMonthsDays(daysDifference);
//   ageDays.innerHTML = `${daysDifference.toFixed()} روز گذشته`;
//   yearAnimal.innerHTML = `سال ${year}:${findChineseZodiac(year)}`;
//   tillBd.innerHTML = `${daysUntilNextBirthday(
//     bdMiladiValue
//   )} روز تا سالروز تولد باقی مانده`;
//   bdShamsi.innerHTML = `${getDayOfWeek(
//     bdMiladiValue
//   )} ${dayWithNoPad}${monthPersian} ${year}`;
//   bdMiladi.innerHTML = `${getDayOfWeekMiladi(
//     bdMiladiValue
//   )} , ${dayMiladiNum} ${monthMiladi} ${yearMiladiNum}`;
// });

const ageFunc = function () {
  const errorMsg = document.querySelector(".error");
  const ageFull = document.querySelector(".age");
  const ageDays = document.querySelector(".age-days");
  const bdShamsi = document.querySelector(".bd-shamsi");
  const bdMiladi = document.querySelector(".bd-miladi");
  const bdGhamari = document.querySelector(".bd-ghamari");
  const yearAnimal = document.querySelector(".year-animal");
  const ageResult = document.querySelector(".age-result");
  const tillBd = document.querySelector(".till-bd");
  //* birthday calc
  const dayWithNoPad = document.getElementById("d").value;
  let day = document.getElementById("d").value.padStart(2, "0");
  let month = document.getElementById("m").value.padStart(2, "0");
  const year = document.getElementById("y").value;
  const birthDate = year + "/" + month + "/" + day;
  console.log(birthDate);
  //* شمسی به میلادی
  moment().locale("fa").format("YYYY/M/D");
  const bdMiladiValue = moment
    .from(birthDate, "fa", "YYYY/MM/DD")
    .format("YYYY-MM-DD");
  console.log(bdMiladiValue);
  const testArray = bdMiladiValue.split("-");
  const monthMiladiNum = testArray[1];
  const dayMiladiNum = testArray[2];
  const yearMiladiNum = testArray[0];
  ageResult.classList.remove("result-hidden");
  ageResult.style.opacity = "1";
  //* month
  let monthPersian;
  if (month == "01") {
    monthPersian = "فروردین";
  }
  if (month == "02") {
    monthPersian = "اردیبهشت";
  }
  if (month == "03") {
    monthPersian = "خرداد";
  }
  if (month == "04") {
    monthPersian = "تیر";
  }
  if (month == "05") {
    monthPersian = "مرداد";
  }
  if (month == "06") {
    monthPersian = "شهریور";
  }
  if (month == "07") {
    monthPersian = "مهر";
  }
  if (month == "08") {
    monthPersian = "آبان";
  }
  if (month == "09") {
    monthPersian = "آذر";
  }
  if (month == "10") {
    monthPersian = "دی";
  }
  if (month == "11") {
    monthPersian = "بهمن";
  }
  if (month == "12") {
    monthPersian = "اسفند";
  }

  let monthMiladi;
  if (monthMiladiNum == "01") {
    monthMiladi = "January";
  }
  if (monthMiladiNum == "02") {
    monthMiladi = "February";
  }
  if (monthMiladiNum == "03") {
    monthMiladi = "March";
  }
  if (monthMiladiNum == "04") {
    monthMiladi = "April";
  }
  if (monthMiladiNum == "05") {
    monthMiladi = "May";
  }
  if (monthMiladiNum == "06") {
    monthMiladi = "June";
  }
  if (monthMiladiNum == "07") {
    monthMiladi = "July";
  }
  if (monthMiladiNum == "08") {
    monthMiladi = "August";
  }
  if (monthMiladiNum == "09") {
    monthMiladi = "September";
  }
  if (monthMiladiNum == "10") {
    monthMiladi = "October";
  }
  if (monthMiladiNum == "11") {
    monthMiladi = "November";
  }
  if (monthMiladiNum == "12") {
    monthMiladi = "December";
  }
  console.log(monthPersian, monthMiladi);
  //* days from your birhday
  // تاریخ مورد نظر (مثلاً تاریخ امروز)
  const targetDate = new Date(bdMiladiValue); // تاریخ مورد نظر را اینجا وارد کنید

  // تاریخ فعلی
  const currentDate = new Date();

  // محاسبه مدت زمان گذشته (به میلی‌ثانیه)
  const timeDifference = currentDate - targetDate;

  // تبدیل مدت زمان به روز
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  // console.log(`${daysDifference.toFixed()} روز گذشته`);

  // age in years , months , days

  // تابعی برای تبدیل تعداد روز به سال، ماه و روز
  function daysToYearsMonthsDays(days) {
    // تعداد روز را به سال، ماه و روز تبدیل می‌کنیم
    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30);
    const remainingDaysInMonth = Math.ceil(remainingDays % 30);

    // return {
    //   years: years,
    //   months: months,
    //   days: remainingDaysInMonth,
    // };
    if (years == 0) {
      ageFull.innerHTML = `${months} ماه و ${remainingDaysInMonth} و روز`;
    } else {
      ageFull.innerHTML = `${years} سال و ${months} ماه و ${remainingDaysInMonth} و روز`;
    }
  }
  // console.log(daysToYearsMonthsDays(daysDifference));
  //* مشخص کردن روز هفته
  function getDayOfWeek(dateString) {
    const daysOfWeek = [
      "شنبه",
      "یک‌شنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنج‌شنبه",
      "جمعه",
    ];

    const date = new Date(dateString);
    let dayOfWeek = date.getDay();

    // تغییر شنبه به عنوان روز اول هفته
    dayOfWeek = (dayOfWeek + 1) % 7;
    return daysOfWeek[dayOfWeek];
  }
  function getDayOfWeekMiladi(dateString) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date(dateString);
    let dayOfWeek = date.getDay();

    // تغییر شنبه به عنوان روز اول هفته
    return daysOfWeek[dayOfWeek];
  }
  console.log(getDayOfWeek(bdMiladiValue));

  //* Animal of the year
  function findChineseZodiac(year) {
    const animals = [
      "موش",
      "گاو",
      "ببر",
      "خرگوش",
      "اژدها",
      "مار",
      "اسب",
      "گوسفند",
      "میمون",
      "مرغ",
      "سگ",
      "خوک",
    ];
    const zodiacIndex = (year - 7) % 12; // باقی‌مانده تقسیم بر ۱۲

    return animals[zodiacIndex];
  }
  console.log(findChineseZodiac(year));
  //* till birthdate
  function daysUntilNextBirthday(birthdate) {
    // Convert the birthdate string to a Date object
    const birthDateObject = new Date(birthdate);

    // Get the current date
    const currentDate = new Date();

    // Set the birthdate for the current year
    const currentYearBirthday = new Date(
      currentDate.getFullYear(),
      birthDateObject.getMonth(),
      birthDateObject.getDate()
    );

    // Check if the birthday has already occurred this year
    if (currentDate > currentYearBirthday) {
      // If yes, set the birthday for the next year
      currentYearBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    // Calculate the difference in milliseconds
    const timeDifference =
      currentYearBirthday.getTime() - currentDate.getTime();

    // Convert the time difference to days
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
  }
  console.log(daysUntilNextBirthday(bdMiladiValue));
  //* result
  daysToYearsMonthsDays(daysDifference);
  ageDays.innerHTML = `${daysDifference.toFixed()} روز گذشته`;
  yearAnimal.innerHTML = `سال ${year}:${findChineseZodiac(year)}`;
  tillBd.innerHTML = `${daysUntilNextBirthday(
    bdMiladiValue
  )} روز تا سالروز تولد باقی مانده`;
  bdShamsi.innerHTML = `${getDayOfWeek(
    bdMiladiValue
  )} ${dayWithNoPad}${monthPersian} ${year}`;
  bdMiladi.innerHTML = `${getDayOfWeekMiladi(
    bdMiladiValue
  )} , ${dayMiladiNum} ${monthMiladi} ${yearMiladiNum}`;
};
function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    // Trigger the function when Enter is pressed
    ageFunc();
  }
}
