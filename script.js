const btn = document.getElementsByClassName("btn");
const input = document.getElementById("input");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (event) => {
    // const classes = event.target.classList;
    if (
      event.target.classList.contains("numbers") ||
      event.target.classList.contains("operators")
    ) {
      // console.log(event.target);
      input.value = `${input.value}${event.target.innerText}`;
    } else if (event.target.classList.contains("clear")) {
      input.value = "";
      window.location.reload();
    } else {
      const correctForm = /^(\d+(\.\d+)?)([+\-*/](\d+(\.\d+)?))*$/;
      const invalid = /^(\/|\*){1,}/;
      if (input.value.match(invalid) || !input.value.match(correctForm)) {
        for (let i = 0; i < btn.length; i++) {
          if (!btn[i].classList.contains("clear")) {
            btn[i].disabled = true;
          }
        }
        input.value = "Invalid Expression";
        input.style.color = "red";
      } else {
        const result = eval(input.value);
        input.value = result;
      }
    }
  });
}
