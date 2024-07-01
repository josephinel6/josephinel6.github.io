window.onload = function () {
  console.log("Running");
  document.documentElement.className = localStorage.getItem("user-theme");
};
