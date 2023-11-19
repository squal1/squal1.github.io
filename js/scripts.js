/*!
 * Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
 */
window.addEventListener("DOMContentLoaded", (event) => {
    const sidebarWrapper = document.getElementById("sidebar-wrapper");
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", (event) => {
        event.preventDefault();
        sidebarWrapper.classList.toggle("active");
        _toggleMenuIcon();
        menuToggle.classList.toggle("active");
    });

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(
        document.querySelectorAll("#sidebar-wrapper .js-scroll-trigger")
    );
    scrollTriggerList.map((scrollTrigger) => {
        scrollTrigger.addEventListener("click", () => {
            sidebarWrapper.classList.remove("active");
            menuToggle.classList.remove("active");
            _toggleMenuIcon();
        });
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector(
            ".menu-toggle > .fa-bars"
        );
        const menuToggleTimes = document.body.querySelector(
            ".menu-toggle > .fa-xmark"
        );
        if (menuToggleBars) {
            menuToggleBars.classList.remove("fa-bars");
            menuToggleBars.classList.add("fa-xmark");
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove("fa-xmark");
            menuToggleTimes.classList.add("fa-bars");
        }
    }

    // Scroll to top button appear
    document.addEventListener("scroll", () => {
        const scrollToTop = document.body.querySelector(".scroll-to-top");
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    });

    var portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Get data from the clicked portfolio item
            var projectName = this.querySelector(".h1").textContent;

            // Set modal title
            document.getElementById("projectModalLabel").textContent =
                projectName;

            // Set modal content based on the clicked item
            var projectContent = getProjectContent(projectName);
            document.getElementById("projectModalBody").innerHTML =
                projectContent;

            // Show the modal
            $("#projectModal").modal("show");
        });
    });

    function getProjectContent(projectName) {
        switch (projectName) {
            case "Jchannel":
                return `
                                <h4>Details about Jchannel project.</h4>
                                <p><strong>Project Date:</strong> March 2022 - September 2022</p>
                                <p><strong>Repository:</strong> <a href="https://github.com/squal1/jchannel" target="_blank">Jchannel on GitHub</a></p>
                                <p><strong>Detailed Description:</strong> A online forum just for Jessup comminuty inspired from LIHKG.</p>
                                <p><strong>Tech Stack:</strong>MERN, OAuth2, JWT, TinyMCE</p>
                            `;
            case "Devlytics":
                return `
                                <h4>Details about Devlytics project.</h4>
                                <p><strong>Project Date:</strong> April 2023 - August 2023</p>
                                <p><strong>Detailed Description:</strong> A web tool for company recruiters to short list candidates effectively by analyzing programming experiences in GitHub.</p>
                                <p><strong>Tech Stack:</strong>MERN, chartjs, Docker</p>
                            `;
            case "AI tools":
                return `
                                <h4>Details about AI tools project.</h4>
                                <p><strong>Project Date:</strong> October 2023 - Current</p>
                                <p><strong>Detailed Description:</strong> Visualize neural network.</p>
                                <p><strong>Tech Stack:</strong>React, Cytoscape, chartjs</p>
                            `;
            case "BirdNET Research":
                return `
                                <h4>Details about BirdNET Research project.</h4>
                                <p><strong>Project Date:</strong> August 2023 - Current</p>
                                <p><strong>Detailed Description:</strong> Run tests with BirdNET and evaluate it's performance.</p>
                                <p><strong>Tech Stack:</strong>Python, Bash, Google Cloud</p>
                            `;
            default:
                return "<p>No details available.</p>";
        }
    }
});

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += 0.1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}
