// Smooth scrolling for navbar links
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(".menu-links a");

  scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href");

      // Handle the "Home" link separately
      if (href === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else if (href === "#footer") { // Handle the "About" and "Contact" links
        const footerElement = document.getElementById("footer");
        if (footerElement) {
          const offsetTop = footerElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      } else { // Default behavior for other links with IDs
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
