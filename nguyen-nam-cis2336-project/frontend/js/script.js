document.addEventListener("DOMContentLoaded", function () {

    // FAQ

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    for (let question of faqQuestions) {

        question.addEventListener("click", function () {

            const answer =
                question.nextElementSibling;

            if (answer.style.display === "block") {

                answer.style.display = "none";

            }
            else {

                answer.style.display = "block";

            }

        });

    }


    // Form Input Focus

    const formFields = document.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="number"], select, textarea'
    );

    for (let field of formFields) {

        field.addEventListener("focus", function () {

            field.style.backgroundColor = "#fff8e8";

        });

        field.addEventListener("blur", function () {

            field.style.backgroundColor = "white";

        });

    }


    // Artwork Cards

    const artworkCards =
        document.querySelectorAll(".art-card");

    for (let card of artworkCards) {

        card.addEventListener("mouseenter", function () {

            card.style.borderColor = "#8b5e3c";

        });

        card.addEventListener("mouseleave", function () {

            card.style.borderColor = "#dddddd";

        });

    }


    // Event Cards

    const eventCards =
        document.querySelectorAll(".event-card");

    for (let card of eventCards) {

        card.addEventListener("mouseenter", function () {

            card.style.borderColor = "#8b5e3c";

        });

        card.addEventListener("mouseleave", function () {

            card.style.borderColor = "#dddddd";

        });

    }
        // Submission Form

    const form = document.querySelector("#artwork-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const artistName =
                document.querySelector("#artist-name");

            const email =
                document.querySelector("#email");

            const artworkTitle =
                document.querySelector("#art-title");

            if (artistName.value.trim() === "") {

                alert("Please enter your name.");
                artistName.focus();
                return;

            }

            if (email.value.trim() === "") {

                alert("Please enter your email.");
                email.focus();
                return;

            }

            if (artworkTitle.value.trim() === "") {

                alert("Please enter the artwork title.");
                artworkTitle.focus();
                return;

            }

            const oldMessage =
                document.querySelector("#submission-message");

            if (oldMessage) {

                oldMessage.remove();

            }

            const message =
                document.createElement("p");

            message.id = "submission-message";

            message.textContent =
                "Thank you! Your artwork has been submitted successfully.";

            form.after(message);

            form.reset();

        });

    }

});
