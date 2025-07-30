
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile submenu toggle
    const submenuButtons = document.querySelectorAll('.mobile-submenu-button');
    submenuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const submenu = button.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle('show');
                button.classList.toggle('active');
            }
        });
    });

    // Desktop dropdown toggle
    const desktopDropdownToggles = document.querySelectorAll('.desktop-dropdown-toggle');
    desktopDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = toggle.nextElementSibling;
            if (!dropdown) return;

            // Close other open dropdowns
            document.querySelectorAll('.desktop-dropdown').forEach(dd => {
                if (dd !== dropdown) {
                    dd.classList.add('hidden');
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle('hidden');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (![...document.querySelectorAll('.desktop-dropdown, .desktop-dropdown-toggle')].some(el => el.contains(e.target))) {
            document.querySelectorAll('.desktop-dropdown').forEach(dd => {
                dd.classList.add('hidden');
            });
        }
    });
});
