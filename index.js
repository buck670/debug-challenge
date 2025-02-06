document.addEventListener("DOMContentLoaded", function () {
  // make sure these match the HTML element names for the ID then class.
  let input = document.querySelector("#textbox");
  let display = document.querySelector(".display");

  // This code should be working
  input.addEventListener("input", function () {
    const name = input.value;
    display.textContent = name;
  });

  // missing function?

  // you should see 5 in the output of your console
  let num = 2;
  console.log(num + 3);
});
