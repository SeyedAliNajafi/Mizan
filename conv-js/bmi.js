//* calc
const calcBtn = document.querySelector(".calc-btn");
// calcBtn.addEventListener("click", function () {
//   const inputWeight = document.querySelector(".input-weight");
//   const inputHeight = document.querySelector(".input-height");
//   const result = document.querySelector(".result");
//   const errorMsg = document.querySelector(".error");
//   const weightStatus = document.querySelector(".body-status");
//   const inputWeightValue = Number(inputWeight.value);
//   const inputHeightValue = Number(inputHeight.value);
//   const bmi = ((inputWeightValue / inputHeightValue ** 2) * 10000).toFixed(1);
//   result.innerText = bmi;
//   if (bmi < 10) {
//     weightStatus.style.display = "block";
//     weightStatus.innerText = "وزن یا قد غیرقابل قبول";
//     return 0;
//   } else if (bmi > 38) {
//     weightStatus.style.display = "block";
//     weightStatus.innerText = "وزن یا قد غیر قابل قبول";
//     return 0;
//   }
//   if (bmi < 18.5) {
//     weightStatus.style.display = "block";
//     weightStatus.innerText = "کمبود وزن ";
//     weightStatus.style.color = "#ffa534";
//   } else if (bmi < 24.9) {
//     weightStatus.style.display = "block";
//     weightStatus.innerText = "وزن نرمال";
//     weightStatus.style.color = "#57e32c";
//   } else if (bmi < 29.9) {
//     weightStatus.style.display = "block";
//     weightStatus.innerText = "اضافه وزن";
//     weightStatus.style.color = "#ffe234";
//   } else if (bmi > 30) {
//     weightStatus.style.display = "block";
//     weightStatus.innerText = "چاقی";
//     weightStatus.style.color = "#ff4545";
//   }
// });
const bmiFunc = function () {
  const inputWeight = document.querySelector(".input-weight");
  const inputHeight = document.querySelector(".input-height");
  const result = document.querySelector(".result");
  const errorMsg = document.querySelector(".error");
  const weightStatus = document.querySelector(".body-status");
  const inputWeightValue = Number(inputWeight.value);
  const inputHeightValue = Number(inputHeight.value);
  const bmi = ((inputWeightValue / inputHeightValue ** 2) * 10000).toFixed(1);
  result.innerText = bmi;
  if (bmi < 10) {
    weightStatus.style.display = "block";
    weightStatus.innerText = "وزن یا قد غیرقابل قبول";
    return 0;
  } else if (bmi > 38) {
    weightStatus.style.display = "block";
    weightStatus.innerText = "وزن یا قد غیر قابل قبول";
    return 0;
  }
  if (bmi < 18.5) {
    weightStatus.style.display = "block";
    weightStatus.innerText = "کمبود وزن ";
    weightStatus.style.color = "#ffa534";
  } else if (bmi < 24.9) {
    weightStatus.style.display = "block";
    weightStatus.innerText = "وزن نرمال";
    weightStatus.style.color = "#57e32c";
  } else if (bmi < 29.9) {
    weightStatus.style.display = "block";
    weightStatus.innerText = "اضافه وزن";
    weightStatus.style.color = "#ffe234";
  } else if (bmi > 30) {
    weightStatus.style.display = "block";
    weightStatus.innerText = "چاقی";
    weightStatus.style.color = "#ff4545";
  }
};
function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    // Trigger the function when Enter is pressed
    bmiFunc();
  }
}
//* copy btn
let copyText = document.querySelector(".copy-text");
let copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", function () {
  let result = copyText.querySelector(".result");
  navigator.clipboard.writeText(result.value);
});
