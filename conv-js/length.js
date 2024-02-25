//* Drop Down
const dropdowns = document.querySelectorAll(".dropdown");
const selected = document.querySelector(".selected");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});


//* Convert
const calcBtn = document.querySelector(".calc-btn");
// calcBtn.addEventListener("click", function () {
//   const input = document.querySelector(".user-inp");
//   const result = document.querySelector(".result");
//   const selected = document.querySelector(".selected");
//   if (selected.innerText == "کیلومتر به مایل") {
//     result.innerText = (Number(input.value) / 1.609).toFixed(2);
//   }
//   if (selected.innerText == "مایل به کیلومتر") {
//     result.innerText = (Number(input.value) * 1.609).toFixed(2);
//   }
//   if (selected.innerText == "اینچ به سانتی متر") {
//     result.innerText = (Number(input.value) * 2.54).toFixed(2);
//   }
//   if (selected.innerText == "سانتی متر به اینچ") {
//     result.innerText = (Number(input.value) / 2.54).toFixed(2);
//   }
//   if (selected.innerText == "فوت به سانتی متر") {
//     result.innerText = (Number(input.value) * 30.48).toFixed(2);
//   }
//   if (selected.innerText == "سانتی متر به فوت") {
//     result.innerText = (Number(input.value) / 30.48).toFixed(2);
//   }
//   if (selected.innerText == "متر به یارد") {
//     result.innerText = (Number(input.value) * 1.094).toFixed(2);
//   }
//   if (selected.innerText == "یارد به متر") {
//     result.innerText = (Number(input.value) / 1.094).toFixed(2);
//   }
//   if (selected.innerText == "دسی متر به متر") {
//     result.innerText = (Number(input.value) / 10).toFixed(2);
//   }
//   if (selected.innerText == "متر به دسی متر") {
//     result.innerText = (Number(input.value) * 10).toFixed(2);
//   }
//   if (selected.innerText == "سانتی متر به میکرومتر") {
//     result.innerText = Number(input.value) * 1000;
//   }
//   if (selected.innerText == "میکرومتر به نانومتر") {
//     result.innerText = Number(input.value) * 1000;
//   }
// });
const lengthFunc = function () {
  const input = document.querySelector(".user-inp");
  const result = document.querySelector(".result");
  const selected = document.querySelector(".selected");
  if (selected.innerText == "کیلومتر به مایل") {
    result.innerText = (Number(input.value) / 1.609).toFixed(2);
  }
  if (selected.innerText == "مایل به کیلومتر") {
    result.innerText = (Number(input.value) * 1.609).toFixed(2);
  }
  if (selected.innerText == "اینچ به سانتی متر") {
    result.innerText = (Number(input.value) * 2.54).toFixed(2);
  }
  if (selected.innerText == "سانتی متر به اینچ") {
    result.innerText = (Number(input.value) / 2.54).toFixed(2);
  }
  if (selected.innerText == "فوت به سانتی متر") {
    result.innerText = (Number(input.value) * 30.48).toFixed(2);
  }
  if (selected.innerText == "سانتی متر به فوت") {
    result.innerText = (Number(input.value) / 30.48).toFixed(2);
  }
  if (selected.innerText == "متر به یارد") {
    result.innerText = (Number(input.value) * 1.094).toFixed(2);
  }
  if (selected.innerText == "یارد به متر") {
    result.innerText = (Number(input.value) / 1.094).toFixed(2);
  }
  if (selected.innerText == "دسی متر به متر") {
    result.innerText = (Number(input.value) / 10).toFixed(2);
  }
  if (selected.innerText == "متر به دسی متر") {
    result.innerText = (Number(input.value) * 10).toFixed(2);
  }
  if (selected.innerText == "سانتی متر به میکرومتر") {
    result.innerText = Number(input.value) * 1000;
  }
  if (selected.innerText == "میکرومتر به نانومتر") {
    result.innerText = Number(input.value) * 1000;
  }
};
function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    // Trigger the function when Enter is pressed
    lengthFunc();
  }
}
//* copy btn
let copyText = document.querySelector(".copy-text");
let copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", function () {
  let result = copyText.querySelector(".result");
  navigator.clipboard.writeText(result.value);
});
