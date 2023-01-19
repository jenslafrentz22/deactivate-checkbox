const fastCheck = document.querySelector("#fast");
const cheapCheck = document.querySelector("#cheap");
const goodCheck = document.querySelector("#good");
last = null;

function checker(item) {
  if (fastCheck.checked && cheapCheck.checked && goodCheck.checked) {
    last.checked = false;
    last = item;
  } else {
    last = item; // 1. Durchlauf: last noch null !
  }
}

fastCheck.addEventListener("click", () => checker(fastCheck));
cheapCheck.addEventListener("click", () => checker(cheapCheck));
goodCheck.addEventListener("click", () => checker(goodCheck));

/*
// mein Lösungsversuch (klappt noch nicht ganz):
let checkArr = [];
if (!checkArr.includes(item) && checkArr.length < 2) {
    checkArr.push(item);
  } else {
    checkArr.push(item);
    checkArr[1].checked = false;
    checkArr.pop(checkArr[1]);
  }

  // andere Lösung (Klasse vor uns, ähnlich meiner):
const fastInputElement = document.querySelector("#fast")
const cheapInputElement = document.querySelector("#cheap")
const goodInputElement = document.querySelector("#good")

const saveActive = []; // max 3 elemente haben

function check (item) {
    if (item.checked) {
        saveActive.push(item)
    } else {
        const index = saveActive.findIndex(currentArrItem => {
            return currentArrItem === item
        })

        saveActive.splice(index, 1)
    }
  

    if (saveActive.length > 2) {
        saveActive[1].checked = false
        saveActive.splice(1, 1)
    }

    console.log(saveActive)
}

// click event listener auf jedes Element
fastInputElement.addEventListener("click", () => check(fastInputElement))
cheapInputElement.addEventListener("click", () => check(cheapInputElement))
goodInputElement.addEventListener("click", () => check(goodInputElement))

*/
