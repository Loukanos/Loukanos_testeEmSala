function openPopUp() {
    var popup = document.getElementById("popup");
    var mask = document.getElementById("wrapper");
    mask.style.opacity = 0.5;
    popup.style.display = "flex"
  }

  function closePopUp() {
    var popup = document.getElementById("popup");
    var mask = document.getElementById("wrapper");
    mask.style.opacity = 1;
    popup.style.display = "none"
  }