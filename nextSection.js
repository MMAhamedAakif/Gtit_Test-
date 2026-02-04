{/* <script>
  document.getElementById("scrollUp").onclick = () => {
    window.scrollBy({ top: -300, behavior: "smooth" });
  };

  document.getElementById("scrollDown").onclick = () => {
    window.scrollBy({ top: 300, behavior: "smooth" });
  };
</script> */}


document.getElementById("scrollDown").onclick = () => {
  document.getElementById("nextSection").scrollIntoView({
    behavior: "smooth"
  });
};
