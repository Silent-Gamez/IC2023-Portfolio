function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("card");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click();

  // Let Hell
  let blue = document.querySelector("#blue")
  let green = document.querySelector("#green")
  let purple = document.querySelector("#purple")
  let red = document.querySelector("#red")
  let lime = document.querySelector("#lime")
  let cyan = document.querySelector("#cyan")
  let yellow = document.querySelector("#yellow")
  let pink = document.querySelector("#pink")
  let white = document.querySelector("#white")
  let black = document.querySelector("#black")
  let orange = document.querySelector("#orange")
  let darkgreen = document.querySelector("#darkgreen")
  let navyblue = document.querySelector("#navyblue")
  let gray = document.querySelector("#gray")
  let darkgray = document.querySelector("#darkgray")
  let indigo = document.querySelector("#indigo")
  let silver = document.querySelector("#silver")
  let amethyst = document.querySelector("#amethyst")
  let royalpurple = document.querySelector("#royal-purple")
  let brown = document.querySelector("#brown")
  let caramel = document.querySelector("#caramel")
  let cardinal = document.querySelector("#cardinal")
  let chromeyellow = document.querySelector("#chrome-yellow")
  let citrine = document.querySelector("#citrine")
  let coffee = document.querySelector("#coffee")
  let corn = document.querySelector("#corn")
  let silk = document.querySelector("#silk")
  let gold = document.querySelector("#gold")
  let seagreen = document.querySelector("#sea-green")
  let violet = document.querySelector("#violet")
  let steelblue = document.querySelector("#steelblue")
  let drab = document.querySelector("#drab")
  let firebrick = document.querySelector("#fire-brick")
  let darkred = document.querySelector("#dark-red")
  let hotpink = document.querySelector("#hot-pink")
  let lava = document.querySelector("#lava")
  let lilac = document.querySelector("#lilac")
  let mint = document.querySelector("#mint")
  let melon = document.querySelector("#melon")
  let final = document.querySelector("#last-circle")
  function LoadAnimation() {

  }


  function NextPage() {
      blue.style.animation = "grow 0.5s linear"
  }