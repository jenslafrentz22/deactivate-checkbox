const fastCheck = document.querySelector("#fast");
const cheapCheck = document.querySelector("#cheap");
const goodCheck = document.querySelector("#good");
last = null;

// 1. Lösung über Array:
let checkArr = [];
function checker(item) {
  if (item.checked) {
    if (checkArr.length >= 2) {
      checkArr.push(item);
      checkArr[1].checked = false;
      checkArr.splice(1, 1);
    } else {
      checkArr.push(item);
    }
  } else {
    const index = checkArr.findIndex(function (e) {
      // Callback
      return e === item;
    });
    checkArr.splice(index, 1); // Startwert, wieviele ab da löschen
  }
}

fastCheck.addEventListener("change", () => checker(fastCheck));
cheapCheck.addEventListener("change", () => checker(cheapCheck));
goodCheck.addEventListener("change", () => checker(goodCheck));

/*
// 2. Lösung über Checkbox-Status
function checker(item) {
  if (fastCheck.checked && cheapCheck.checked && goodCheck.checked) {
    last.checked = false;
    last = item;
  } else {
    last = item; // 1. Durchlauf: last noch null !
  }
}
*/
