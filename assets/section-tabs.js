// Get all tab links and tab content elements
const tabLinks = document.querySelectorAll('.tab-links li');
const tabContent = document.querySelectorAll('.tab-content .tab');

// Add click event listener to each tab link
tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove 'active' class from all tab links and tab content
    tabLinks.forEach((link) => link.classList.remove('active'));
    tabContent.forEach((tab) => tab.classList.remove('active'));

    // Add 'active' class to the clicked tab link
    tabLink.classList.add('active');

    // Show the corresponding tab content
    const targetTab = document.querySelector(tabLink.querySelector('a').getAttribute('href'));
    targetTab.classList.add('active');
  });
});
