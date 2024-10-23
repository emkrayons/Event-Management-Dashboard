// // script.js

const openSidebarBtn = document.getElementById('openSidebarBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content'); // The main content to hide
const footer = document.querySelector('footer');
// Show the sidebar and content
openSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex'; // Show sidebar
    content.style.display = 'none'; // Hide content
    footer.style.display = 'none';
    openSidebarBtn.style.display = 'none'; // Hide open button
    closeSidebarBtn.style.display = 'inline-block'; // Show close button
});

// Hide the sidebar and show content
closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'none'; // Hide sidebar
    content.style.display = 'block'; // Show content
   
    openSidebarBtn.style.display = 'inline-block'; // Show open button
    closeSidebarBtn.style.display = 'none'; // Hide close button
});



const items = ["Cloud Innovation Summit", "Blockchain Revolution Conference", " AI in Healthcare Symposium", " Future of Fintech Forum", " Data Analytics in Business", " Sustainable Energy Expo", "Web3 Interfaces Workshop",  "Cybersecurity for Startups", "Smart cities Forum", "Tech Safari Mixer"];

  // Listen for Enter key press in the input field
  document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

performSearch = () => {
    const query = document.getElementById("search-input").value.toLowerCase();
    const resultsDiv = document.getElementById("searchResults");


    // Clear previous search results before displaying new ones
    resultsDiv.innerHTML = ""; 

     // Clear the input field after performing search
     document.getElementById("search-input").value = "";

    if (query === "") {
        resultsDiv.textContent = "Please enter a search term.";
        return;
    }

    // Filter the items based on the query
    const filteredItems = items.filter(item => item.toLowerCase().includes(query));

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            resultsDiv.appendChild(p);
        });
    } else {
        resultsDiv.textContent = "No results found.";
    }
}



// slider functions
let currentSlideIndex = 0;
let slideInterval;

// Function to show the slide based on index
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Hide all slides by removing 'active' class
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Remove 'active-dot' class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active-dot');
    });

    // Handle circular navigation (loop through slides)
    if (index >= slides.length) {
        currentSlideIndex = 0; // Go to the first slide
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Go to the last slide
    } else {
        currentSlideIndex = index; // Set current slide index
    }

    // Show the active slide and activate the corresponding dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active-dot');
}

// Next and previous slide controls
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Function to set the slide when a dot is clicked
function currentSlide(index) {
    showSlide(index);
}

// Auto-slide functionality
function startSlideShow() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 3 seconds
}

// Stop the auto-slide when user interacts with buttons
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Initialize the slider and start auto-slide on page load
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlideIndex);  // Show the first slide
    startSlideShow();              // Start auto-slide

    // Event listeners to stop auto-slide when user navigates manually
    document.getElementById('prev').addEventListener('click', function() {
        stopSlideShow();
        prevSlide();
        startSlideShow();  // Restart the auto-slide after manual interaction
    });

    document.getElementById('next').addEventListener('click', function() {
        stopSlideShow();
        nextSlide();
        startSlideShow();  // Restart the auto-slide after manual interaction
    });
});



const toggleModeBtn = document.getElementById('toggleModeBtn');
const body = document.body;

toggleModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle dark-mode class
});




// Canvas 
  window.onload = function() {
    const ctx = document.getElementById('myBarChart').getContext('2d');
    new Chart(ctx, { 
        type: 'bar',
        data: {
            labels: ['Ja', 'Fb', 'Ma', 'Ap', 'Ma', 'Jn', 'Jl', 'Au', 'Se', 'Oc', 'No', 'De'], // X-axis labels (months)
            datasets: [{
                label: 'Monthly Data',
                data: [300, 500, 100, 800, 600, 400, 700, 200, 900, 500, 300, 800], // Y-axis data points
                backgroundColor: '#8576FF',
                borderColor: '#8576FF',
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 200, // Set interval steps for y-axis (200 in this case)
                        min: 0,
                        max: 1000 // Upper limit for y-axis
                    }
                }
            }
        }
    });
}


