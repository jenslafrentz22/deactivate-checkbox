const fastCheck = document.querySelector("#fast");
const cheapCheck = document.querySelector("#cheap");
const goodCheck = document.querySelector("#good");
last = null;
/*
function checker(item) {
  if (fastCheck.checked && cheapCheck.checked && goodCheck.checked) {
    last.checked = false;
    last = item;
  } else {
    last = item; // 1. Durchlauf: last noch null !
  }
}
*/

// mein 1. Lösungsversuch (klappt!):
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
