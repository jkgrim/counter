let count = 0;

const value = document.getElementById("value");

function handleCrementer(amt) {
  if (amt === 0) {
    count = value.innerHTML = 0;
    value.style.color = "black";
  } else {
    count += amt;
    value.innerHTML = count;

    if (count === 0) {
      value.style.color = "black";
    } else if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    }
  }
}

// buttons.forEach((button) => {
//   let total = value.innerHTML;

//   button.addEventListener("click", (e) => {
//     switch (button.innerText) {
//       case "decrease":
//         total -= 1;
//         break;

//       case "reset":
//         total = 0;
//         break;

//       case "increase":
//         total += 1;
//         break;
//     }
//   });
// });

// buttons.addEventListener("click", (e) => {
//   const styles = e.currentTarget.classList;

//   if (styles.includes("decrease")) {
//     console.log("hit");
//     count--;
//   } else if (styles.includes("increase")) {
//     count++;
//   } else {
//     count = 0;
//   }
// });
