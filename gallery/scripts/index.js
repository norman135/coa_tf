let imageContainers = document.querySelectorAll(".image-container")
imageContainers.forEach(container => {
    let image = container.querySelector(".image")
    let imageLink = container.querySelector(".image-info-link")
    let imageLocation = container.querySelector(".image-info-location")
    container.addEventListener("mouseover", ()=>{
        image.style.filter = "blur(5px) grayscale(1) brightness(0.5)"
        image.style.transform = "scale(1.1)"
        imageLink.style.opacity = 1
        imageLocation.style.marginBottom = "30px"
    })
    container.addEventListener("mouseleave", ()=>{
        image.style.filter = "unset"
        image.style.transform = "unset"
        imageLink.style.opacity = 0
        imageLocation.style.marginBottom = "unset"
    })
})