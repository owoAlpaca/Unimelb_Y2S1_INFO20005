//Top Navigation - Search Button - Seach Menu
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

//Product Page - Add to Cart Button - Add to Cart Notification
function showAddToCart() {
  let DarkEffect = document.getElementById("DarkEffect");
  let AddToCart = document.getElementById("AddToCart");

  DarkEffect.style.display = "flex";
  AddToCart.style.display = "flex";

  setTimeout(function() {
    DarkEffect.style.opacity = "1";
    AddToCart.style.opacity = "1";
  }, 100);
}

function hideAddToCart() {
  let DarkEffect = document.getElementById("DarkEffect");
  let AddToCart = document.getElementById("AddToCart");

  DarkEffect.style.opacity = "0";
  AddToCart.style.opacity = "0";

  setTimeout(function() {
    DarkEffect.style.display = "none";
    AddToCart.style.display = "none";
  }, 100);
}

//Check Out Page - Step 2 - Disable Express Delivery
function DisableOption(){
  let Standard = document.getElementById("Standard")
  alert("Express Delivery is temporarily unavailable.");
  Standard.checked = true;
}

//Footer - UpperInfoSection - ToggleButton123 + - & hide content
function FtoggleButton1() {
  let button = document.getElementById("FooterToggleButton1");
  let hidecontent = document.getElementById("FooterInfoContent1");

  if (button.textContent === "+") {
    button.textContent = "-";
    hidecontent.style.display = "flex";
  } else {
    button.textContent = "+";
    hidecontent.style.display = "none";
  }
}

function FtoggleButton2() {
  let button = document.getElementById("FooterToggleButton2");
  let hidecontent = document.getElementById("FooterInfoContent2");

  if (button.textContent === "+") {
    button.textContent = "-";
    hidecontent.style.display = "flex";
  } else {
    button.textContent = "+";
    hidecontent.style.display = "none";
  }
}

function FtoggleButton3() {
  let button = document.getElementById("FooterToggleButton3");
  let hidecontent = document.getElementById("FooterInfoContent3");

  if (button.textContent === "+") {
    button.textContent = "-";
    hidecontent.style.display = "flex";
  } else {
    button.textContent = "+";
    hidecontent.style.display = "none";
  }
}