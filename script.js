const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  function setActiveLink() {
    let index = sections.length;

    while (--index >= 0) {
      const section = sections[index];
      if (window.scrollY + window.innerHeight / 3 >= section.offsetTop) {
        navLinks.forEach(link => {
          link.classList.remove("active");
        });
        const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
        break;
      }
    }
  }

function updatePhoneCode() {
    const countrySelect = document.getElementById("country");
    const phoneInput = document.getElementById("phone");
    const selectedCode = countrySelect.value;
  
    if (!selectedCode) return;
  
    // Remove old code if already there
    const number = phoneInput.value.replace(/^\+\d+\s?/, '');
    phoneInput.value = selectedCode + " " + number;
  }
  
  window.onload = updatePhoneCode;
    window.addEventListener("scroll", setActiveLink);
    window.addEventListener("resize", setActiveLink);
    document.getElementById("country").addEventListener("change", updatePhoneCode);
    document.getElementById("phone").addEventListener("input", updatePhoneCode);
  document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      });
    });
  

<script>
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');

  // Toggle drawer
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to the document
    drawer.classList.toggle('translate-x-full');
  });

  // Clicking outside the drawer closes it
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
      drawer.classList.add('translate-x-full');
    }
  });

  // Prevent clicks inside the drawer from closing it
  drawer.addEventListener('click', (e) => {
    e.stopPropagation();
  });
</script>
