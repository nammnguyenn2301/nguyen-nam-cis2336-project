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


    // Gallery Search
    const searchBox =
        document.querySelector("#gallery-search");

    if (searchBox) {

        const artworkCards =
            document.querySelectorAll(".gallery-page .art-card");

        searchBox.addEventListener("input", function () {

            const searchText =
                searchBox.value.toLowerCase();

            for (let card of artworkCards) {

                const cardText =
                    card.textContent.toLowerCase();

                if (cardText.includes(searchText)) {
                    card.style.display = "block";
                }
                else {
                    card.style.display = "none";
                }

            }

        });

    }


    // Artwork Image Enlargement
    const galleryImages =
        document.querySelectorAll(".gallery-page .art-card img");

    const imageModal =
        document.querySelector("#image-modal");

    const largeImage =
        document.querySelector("#large-image");

    const imageCaption =
        document.querySelector("#image-caption");

    const closeImage =
        document.querySelector("#close-image");

    if (imageModal) {

        for (let image of galleryImages) {

            image.addEventListener("click", function () {

                largeImage.src = image.src;
                largeImage.alt = image.alt;
                imageCaption.textContent = image.alt;

                imageModal.style.display = "flex";

            });

        }

        closeImage.addEventListener("click", function () {
            imageModal.style.display = "none";
        });

        imageModal.addEventListener("click", function (event) {

            if (event.target === imageModal) {
                imageModal.style.display = "none";
            }

        });

    }


    // Event Details
    const eventButtons =
        document.querySelectorAll(".event-details-button");

    for (let button of eventButtons) {

        button.addEventListener("click", function () {

            const details =
                button.nextElementSibling;

            if (details.style.display === "block") {

                details.style.display = "none";
                button.textContent = "View Details";

            }
            else {

                details.style.display = "block";
                button.textContent = "Hide Details";

            }

        });

    }


    // Submission Form
    const form =
        document.querySelector("#artwork-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const artistName =
                document.querySelector("#artist-name");

            const email =
                document.querySelector("#email");

            const artworkTitle =
                document.querySelector("#art-title");

            const category =
                document.querySelector("#category");

            const price =
                document.querySelector("#price");

            const description =
                document.querySelector("#description");

            const agreement =
                document.querySelector("#agreement");


            const nameError =
                document.querySelector("#artist-name-error");

            const emailError =
                document.querySelector("#email-error");

            const titleError =
                document.querySelector("#art-title-error");

            const categoryError =
                document.querySelector("#category-error");

            const priceError =
                document.querySelector("#price-error");

            const descriptionError =
                document.querySelector("#description-error");

            const agreementError =
                document.querySelector("#agreement-error");


            nameError.textContent = "";
            emailError.textContent = "";
            titleError.textContent = "";
            categoryError.textContent = "";
            priceError.textContent = "";
            descriptionError.textContent = "";
            agreementError.textContent = "";


            let valid = true;


            if (artistName.value.trim() === "") {

                nameError.textContent =
                    "Please enter your name.";

                valid = false;

            }


            if (email.value.trim() === "") {

                emailError.textContent =
                    "Please enter your email address.";

                valid = false;

            }
            else {

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email.value)) {

                    emailError.textContent =
                        "Please enter a valid email address.";

                    valid = false;

                }

            }


            if (artworkTitle.value.trim() === "") {

                titleError.textContent =
                    "Please enter the artwork title.";

                valid = false;

            }


            if (category.value === "") {

                categoryError.textContent =
                    "Please select a category.";

                valid = false;

            }


            if (price.value.trim() === "") {

                priceError.textContent =
                    "Please enter the artwork price.";

                valid = false;

            }
            else if (
                isNaN(parseFloat(price.value)) ||
                parseFloat(price.value) < 0
            ) {

                priceError.textContent =
                    "Price must be a nonnegative number.";

                valid = false;

            }


            if (description.value.trim() === "") {

                descriptionError.textContent =
                    "Please enter an artwork description.";

                valid = false;

            }


            if (!agreement.checked) {

                agreementError.textContent =
                    "You must agree before submitting.";

                valid = false;

            }


            if (valid === false) {
                return;
            }


            const artwork = {

                artist: artistName.value,
                email: email.value,
                title: artworkTitle.value,
                category: category.value,
                price: price.value,
                description: description.value

            };


            fetch("/api/artworks", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(artwork)

            })

            .then(function (response) {

                return response.json();

            })

            .then(function (data) {

                const oldMessage =
                    document.querySelector("#submission-message");

                if (oldMessage) {
                    oldMessage.remove();
                }


                const message =
                    document.createElement("p");

                message.id =
                    "submission-message";

                message.textContent =
                    data.message;

                form.after(message);

                form.reset();

            })

            .catch(function (error) {

                console.log(
                    "Error submitting artwork:",
                    error
                );

            });

        });

    }

});