// Popup Modal Functionality
const popupModal = document.getElementById("popup-modal");
const closePopup = document.querySelector(".close-popup");
const popupBtn = document.querySelector(".popup-btn");

function closePopupModal() {
    popupModal.style.display = "none";
}

closePopup.addEventListener("click", closePopupModal);
popupBtn.addEventListener("click", closePopupModal);

// Close popup when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === popupModal) {
        closePopupModal();
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.getElementById("explore-btn").addEventListener("click", () => {
    document.getElementById("cars").scrollIntoView({
        behavior: "smooth"
    });
});

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText === "♡ Like") {
            button.innerText = "❤️ Liked";
        } else {
            button.innerText = "♡ Like";
        }
    });
});

const images = document.querySelectorAll(".gallery-container img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});