document.addEventListener('DOMContentLoaded', function() {
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const dropdown = this.parentElement;
        dropdown.classList.toggle('active');
        
        this.classList.add('active');
      });
    });
    function setActiveBasedOnURL() {
      const currentURL = window.location.href;
      
      const allLinks = document.querySelectorAll('.dropdown-content a');
      
      allLinks.forEach(link => {
        if (currentURL.includes(link.getAttribute('href'))) {
          link.classList.add('active');
          
          const parentDropdown = link.closest('.dropdown');
          if (parentDropdown) {
            parentDropdown.classList.add('active');
            const mainLink = parentDropdown.querySelector(':scope > a');
            if (mainLink) {
              mainLink.classList.add('active');
            }
          }
        }
      });
    }
    
    setActiveBasedOnURL();
  });