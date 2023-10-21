


// =================================== FUNCOES =============================================== //



export function controlarObservadorSection() {

  const sections = document.querySelectorAll("section");

  const navLinks = document.querySelectorAll("header a");
  
  const navMobileLinks = document.querySelectorAll("#navbarMobile a");

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const targetId = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${targetId}`) {
          if (entry.isIntersecting) {
            link.classList.add('rounded', 'bg-primary-700', 'text-white', 'dark:text-white', 'lg:bg-transparent', 'lg:text-primary-700');
          } else {
            link.classList.remove('rounded', 'bg-primary-700', 'text-white', 'dark:text-white', 'lg:bg-transparent', 'lg:text-primary-700');
          }
        }
      });

      navMobileLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${targetId}`) {
          
          if (entry.isIntersecting) {
            if(targetId=='sectionPerguntas'){document.getElementById('marketing-banner').style.display='block'}
            link.classList.add('text-primary-600');
          } else {
            link.classList.remove('text-primary-600');
          }
        }
      });
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}
