/**
 * Disallow Use of Alert
 * https://eslint.org/docs/rules/no-alert
 */

// 👎
alert("here!");

confirm("Are you sure?");

prompt("What's your name?", "John Doe");

// 👍
customAlert("Something happened!");

customConfirm("Are you sure?");

customPrompt("Who are you?");

function foo() {
    var alert = myCustomLib.customAlert;
    alert();
}