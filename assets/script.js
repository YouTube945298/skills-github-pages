
function openApp(url) {
  document.getElementById("appIframe").src = url;
  document.getElementById("app-frame").style.display = "block";
}
function closeApp() {
  document.getElementById("app-frame").style.display = "none";
  document.getElementById("appIframe").src = "";
}
