// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check sum. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3. For an empty string or cancelled input, show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check sum: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

const checkSum = prompt("input a check sum please");
const tipPrc = prompt("input a tip procent please");
if (checkSum === "" || tipPrc === "" || checkSum === null || tipPrc === null) {
  alert("canceled");
} else {
  const parsedCheckSum = Number.parseFloat(checkSum);
  const parsedCheckTip = Number.parseFloat(tipPrc);
  if (
    Number.isNaN(parsedCheckSum) ||
    Number.isNaN(parsedCheckTip) ||
    parsedCheckSum < 0 ||
    parsedCheckTip < 0 ||
    parsedCheckTip > 100
  ) {
    alert("Invalid input data");
  } else {
    const calcTip = Number(((parsedCheckSum * parsedCheckTip) / 100).toFixed(2));
    const totalSum = (parsedCheckSum + calcTip).toFixed(2);
    const message = `Check sum: ${parsedCheckSum}\nTip: ${parsedCheckTip}%\nTip amount: ${calcTip}\nTotal sum to pay: ${totalSum}`;
    alert(message);
  }
}
console.log(checkSum);
