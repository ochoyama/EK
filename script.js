function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

/* Reveal Animation */
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

/* Reveal Animation */
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

/* CONTACT FORM WITH POPUP */
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const smsMessage = 
`New Inquiry from EK COMPANY Website:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(smsMessage);

    const popup = document.getElementById("successPopup");
    popup.classList.add("active");

    setTimeout(() => {
        popup.classList.remove("active");
        window.location.href = `sms:+17343318707?body=${encodedMessage}`;
    }, 2000);
});