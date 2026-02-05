

// Scroll Up button scrolls to previous section or up by 300px
const scrollUpBtn = document.getElementById("scrollUp");
const scrollDownBtn = document.getElementById("scrollDown");

if (scrollUpBtn) {
  scrollUpBtn.onclick = () => {
    window.scrollBy({ top: -300, behavior: "smooth" });
  };
}

if (scrollDownBtn) {
  scrollDownBtn.onclick = () => {
    const nextSection = document.getElementById("nextSection");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 300, behavior: "smooth" });
    }
  };
}
