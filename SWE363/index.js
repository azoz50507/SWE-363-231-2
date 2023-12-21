const posts = [
    {
        src: "https://email.agritecture.com/hubfs/Imported_Blog_Media/badia%20farms-1.png",
        date: new Date("2023-10-02T00:00:00.000Z"),
        title: "Enhancing Agricultural Practices at Al-Nadria Farms",
        brief: "Discover innovative approaches and best practices for agricultural cultivation at Al-Nadria farms. This article provides valuable insights into the cultivation of various vegetables and fruits, along with sustainable and eco-friendly farming techniques.",
        link: "#",
        tags: ["Agriculture", "Farming", "Innovation"]
    },
];

function addPostsToPage() {
    const dynamicPostsSection = document.getElementById("dynamic-posts");

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <img src="${post.src}" alt="${post.title}">
            <h2>${post.title}</h2>
            <p>${post.brief}</p>
            <span>Date: ${post.date.toDateString()}</span>
            <a href="${post.link}">Read More</a>
            <div>Tags: ${post.tags.join(", ")}</div>
        `;

        dynamicPostsSection.appendChild(postElement);
    });
}

// Function to fetch COVID-19 data and display it
function fetchCovidData() {
    fetch("https://coronavirus.m.pipedream.net/")
        .then(response => response.json())
        .then(data => {
            const covidStatsContent = document.getElementById("covid-stats-content");

            const summaryStats = data.summaryStats;
            const lastUpdated = data.cache.lastUpdated;

            const html = `
                <p>Global Confirmed Cases: ${summaryStats.global.confirmed}</p>
                <p>Global Recovered: ${summaryStats.global.recovered}</p>
                <p>Global Deaths: ${summaryStats.global.deaths}</p>
                <p>Last Updated: ${lastUpdated}</p>
            `;

            covidStatsContent.innerHTML = html;
        })
        .catch(error => {
            console.error("Error fetching COVID-19 data:", error);
        });
}

// Call the functions when the content is loaded
document.addEventListener("DOMContentLoaded", function () {
    addPostsToPage();
    fetchCovidData();
    setTimeout(function () {
        document.querySelector(".loader-container").style.display = "none";
        document.body.style.overflow = "visible"; // Show the content
    }, 500);
});

// Keyboard navigation and help popup
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        // Navigate through links in the navigation menu
        let navLinks = document.querySelectorAll("nav ul li a");
        let currentIndex = Array.from(navLinks).findIndex(link => link === document.activeElement);
        let nextIndex = event.key === "ArrowDown" ? (currentIndex + 1) % navLinks.length : (currentIndex - 1 + navLinks.length) % navLinks.length;
        navLinks[nextIndex].focus();
        event.preventDefault();
    } else if (event.key === "Enter") {
        // Trigger click on the focused link
        document.activeElement.click();
    } else if (event.key === "Tab") {
        // Close the help popup when Tab is pressed
        closePopup();
    } else if (event.key === "?") {
        // Show the help popup when '?' is pressed
        document.getElementById("help-popup").style.display = "block";
    }
});

// Function to close the help popup
function closePopup() {
    document.getElementById("help-popup").style.display = "none";
}