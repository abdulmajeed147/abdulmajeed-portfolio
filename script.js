

/* ============================================================
   1. WAIT FOR THE PAGE TO LOAD
   This ensures HTML elements exist before JavaScript runs.
============================================================ */

document.addEventListener("DOMContentLoaded", function () {


    /* ========================================================
       2. ANIMATED TYPING EFFECT
       Display different professional titles automatically.
    ======================================================== */

    // Find the HTML element where animated text will appear.
    const typingElement = document.getElementById("typing");

    // Define the professional titles to display.
    const titles = [
        "Data Scientist",
        "AI Automation Developer",
        "Python Developer",
        "Data Science Enthusiast"
    ];

    // Track the current title and character position.
    let titleIndex = 0;
    let characterIndex = 0;

    // Determine whether text is being typed or erased.
    let isDeleting = false;

    // Control the typing animation speed.
    function typeEffect() {

        // Stop safely if the typing element does not exist.
        if (!typingElement) {
            return;
        }

        // Get the current professional title.
        const currentTitle = titles[titleIndex];

        // Display the current portion of the title.
        typingElement.textContent = currentTitle.substring(
            0,
            characterIndex
        );

        // Set typing speed.
        let speed = isDeleting ? 45 : 90;

        // Increase or decrease the character position.
        if (!isDeleting) {
            characterIndex++;
        } else {
            characterIndex--;
        }

        // When the complete title has been typed...
        if (characterIndex > currentTitle.length) {

            // Pause before erasing.
            isDeleting = true;
            speed = 1200;
        }

        // When the title has been completely erased...
        if (characterIndex < 0) {

            // Start typing the next title.
            isDeleting = false;

            // Move to the next title in the list.
            titleIndex = (titleIndex + 1) % titles.length;

            // Reset the character position.
            characterIndex = 0;

            // Pause briefly before the next title.
            speed = 350;
        }

        // Schedule the next animation step.
        setTimeout(typeEffect, speed);
    }

    // Start the typing animation.
    if (typingElement) {
        typeEffect();
    }


    /* ========================================================
       3. CONSOLE WELCOME MESSAGE
       Display a message when the portfolio loads.
    ======================================================== */

    console.log(
        "Welcome to Abdul Majeed's Data Science Portfolio!"
    );


    /* ========================================================
       4. FUTURE SCROLL ANIMATIONS
       Additional sections will use this feature later.
    ======================================================== */

    // Find all elements marked for reveal animation.
    const revealElements = document.querySelectorAll(".reveal");

    // Check whether the browser supports IntersectionObserver.
    if ("IntersectionObserver" in window) {

        // Create an observer to detect when elements appear.
        const observer = new IntersectionObserver(

            // Run this function when an element enters the screen.
            function(entries, observerInstance) {

                entries.forEach(function(entry) {

                    // Reveal elements that become visible.
                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        // Stop observing the revealed element.
                        observerInstance.unobserve(entry.target);
                    }

                });

            },

            // Reveal the element when about 10% is visible.
            {
                threshold: 0.1
            }

        );

        // Start observing each reveal element.
        revealElements.forEach(function(element) {
            observer.observe(element);
        });

    } else {

        // Fallback: display reveal elements if observer is unavailable.
        revealElements.forEach(function(element) {
            element.classList.add("active");
        });

    }

});




// ============================================================
// INTERACTIVE MOBILE NAVIGATION
// ============================================================

// Wait until the HTML document is fully loaded.
document.addEventListener("DOMContentLoaded", function () {

    // Find the mobile menu button.
    const menuToggle = document.getElementById("menuToggle");

    // Find the navigation links container.
    const navLinks = document.getElementById("navLinks");

    // Find all individual navigation links.
    const navItems = document.querySelectorAll(".nav-link");

    // Continue only if both navigation elements exist.
    if (menuToggle && navLinks) {

        // Open or close the menu when the button is tapped.
        menuToggle.addEventListener("click", function () {

            // Toggle the open class on the navigation links.
            navLinks.classList.toggle("open");

            // Check whether the menu is currently open.
            const isOpen = navLinks.classList.contains("open");

            // Update accessibility information for the button.
            menuToggle.setAttribute("aria-expanded", isOpen);

            // Update the button's accessible label.
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        // Close the mobile menu after selecting a navigation link.
        navItems.forEach(function (link) {

            // Listen for a link click.
            link.addEventListener("click", function () {

                // Remove the open class to hide the menu.
                navLinks.classList.remove("open");

                // Update the button accessibility state.
                menuToggle.setAttribute("aria-expanded", "false");

                // Restore the original button label.
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }

});



// ============================================================
// AUTOMATIC FOOTER COPYRIGHT YEAR
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // Find the copyright year element in the footer.
    const yearElement = document.getElementById("currentYear");

    // Display the current year automatically.
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});

