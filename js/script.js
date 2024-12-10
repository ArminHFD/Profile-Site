// Highlight Active Page in Navigation
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
        }
    });
});

// Modal Popup for Project Details
const modal = document.createElement("div");
modal.id = "modal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.backgroundColor = "#fff";
modal.style.padding = "1rem";
modal.style.borderRadius = "8px";
modal.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
modal.style.zIndex = "1000";

const overlay = document.createElement("div");
overlay.id = "overlay";
overlay.style.display = "none";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
overlay.style.zIndex = "999";

document.body.appendChild(modal);
document.body.appendChild(overlay);

function showModal(content) {
    modal.innerHTML = `<p>${content}</p><button onclick="closeModal()">Close</button>`;
    modal.style.display = "block";
    overlay.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// Attach modal functionality to project links (portfolio.html)
document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.querySelectorAll("#projects ul li a");

    projectLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const projectName = link.textContent;
            const projectDetails = `You clicked on ${projectName}. More details coming soon!`;
            showModal(projectDetails);
        });
    });
});

// Scroll to Top Button
const scrollButton = document.createElement("button");
scrollButton.id = "scroll-to-top";
scrollButton.textContent = "↑";
scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.display = "none";
scrollButton.style.padding = "0.5rem 1rem";
scrollButton.style.backgroundColor = "#333";
scrollButton.style.color = "#fff";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "4px";
scrollButton.style.cursor = "pointer";

document.body.appendChild(scrollButton);

scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});
