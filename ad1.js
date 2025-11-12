/// ad_filter.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey) {
    let math = prompt();
    alert(eval(math));
  }
});
