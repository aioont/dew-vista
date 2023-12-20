<script>
    const menuIcon = document.getElementById('menu-icon');
    const circularMenuIcon = document.querySelector('.circular-menu-icon i');

    // Function to rotate the entire circular icon
    const rotateEntireIcon = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const rotationAngle = scrollY / 5; // You can adjust the rotation speed here

      menuIcon.style.transform = `rotate(${rotationAngle}deg)`;
      circularMenuIcon.style.transform = `translate(-50%, -50%) rotate(${140 + rotationAngle}deg)`;
    };

    // Add scroll event listener to rotate the entire circular icon
    window.addEventListener('scroll', rotateEntireIcon);
  </script>