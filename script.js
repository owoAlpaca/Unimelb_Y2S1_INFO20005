function SearchMenuDisplay() {
  let Menu = document.getElementById("SearchMenu");
  if (Menu.style.opacity === "1") {
    Menu.style.opacity = "0";
    Menu.style.display = "none";
  } else {
    Menu.style.display = "flex";
    setTimeout(function() {
    Menu.style.opacity = "1";
    }, 300);
  }
}
