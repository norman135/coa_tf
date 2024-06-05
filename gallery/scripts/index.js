document.addEventListener("DOMContentLoaded", () => {
    // Select all image containers and the blur cover element
    const imageContainers = document.querySelectorAll(".image-container");
    const blurCover = document.querySelector(".blur-cover");

    // Iterate over each image container to add event listeners
    imageContainers.forEach(container => {
        const image = container.querySelector(".image");
        const imageLink = container.querySelector(".image-info-link");
        const imageLocation = container.querySelector(".image-info-location");
        const containerClone = container.cloneNode(true);
        containerClone.className = "image-container imcd";

        // Mouseover event to apply image styles and show link and location
        container.addEventListener("mouseover", () => {
            applyImageStyles(image, {
                filter: "blur(5px) grayscale(1) brightness(0.5)",
                transform: "scale(1.1)"
            });
            imageLink.style.opacity = "1";
            imageLocation.style.marginBottom = "30px";
        });

        // Mouseleave event to reset image styles and hide link and location
        container.addEventListener("mouseleave", () => {
            applyImageStyles(image, {
                filter: "unset",
                transform: "unset"
            });
            imageLink.style.opacity = "0";
            imageLocation.style.marginBottom = "unset";
        });

        // Click event to show the image in the blur cover
        container.addEventListener("click", () => {
            showImageInBlurCover(containerClone);
        });

        // Prevent link click from propagating to the container click event
        imageLink.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });

    // Click event to hide the blur cover when clicking outside the cloned image
    blurCover.addEventListener("click", (e) => {
        if (e.target !== blurCover) return;
        hideBlurCover();
    });

    // Function to apply styles to the image element
    function applyImageStyles(image, styles) {
        for (const [key, value] of Object.entries(styles)) {
            image.style[key] = value;
        }
    }

    // Function to show the cloned image in the blur cover
    function showImageInBlurCover(containerClone) {
        containerClone.className = "image-container imcd";  // Reset class name
        blurCover.appendChild(containerClone);
        blurCover.style.display = "block";
        setTimeout(() => {
            blurCover.style.backdropFilter = "blur(5px)";
            containerClone.classList.add("imcd-active");
        }, 1);
    }

    // Function to hide the blur cover and remove the cloned image
    function hideBlurCover() {
        const containerClone = blurCover.querySelector(".imcd");
        blurCover.style.backdropFilter = "blur(0px)";
        containerClone.className = "image-container imcd";  // Reset class name
        setTimeout(() => {
            blurCover.innerHTML = "";
            blurCover.style.display = "none";
        }, 300);
    }
});
