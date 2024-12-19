
const links = document.querySelectorAll('nav ul li a');
const offset = 100;

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        const sectionPosition = targetSection.offsetTop - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  });
});

//Redirect click inside div "project-container" to link
document.querySelectorAll('.project-container').forEach(container => {
  container.addEventListener('click', () => {
      const link = container.querySelector('a');
      if (link) {
          window.open(link.href, link.target || '_self');
      }
  });
});






