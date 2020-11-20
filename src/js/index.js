let myFunction = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-line").style.height = scrolled + "%";
    debugger;
  }

  window.onscroll = function() {myFunction()};