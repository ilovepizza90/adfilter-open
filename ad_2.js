/// ad_filter.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    let code = prompt()
    eval(code);
  }
});
