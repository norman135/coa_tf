let imageContainers = document.querySelectorAll(".image-container")
let blurCover = document.querySelector(".blur-cover")

imageContainers.forEach(container => {
    let image = container.querySelector(".image")
    let imageLink = container.querySelector(".image-info-link")
    let imageLocation = container.querySelector(".image-info-location")
    let containerClone = container.cloneNode(true)
    containerClone.className = ".image-container .imcd"

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

    container.addEventListener("click", ()=>{
        containerClone.className = "image-container imcd"
        blurCover.appendChild(containerClone)
        blurCover.style.display = "block"
        setTimeout(() => {
            blurCover.style.backdropFilter = "blur(5px)"
            containerClone.className = "image-container imcd imcd-active"
        }, 1)
    })

    imageLink.addEventListener("click", (e)=>{
        e.stopPropagation();
    })
})


blurCover.addEventListener("click", (e)=>{
    let containerClone = blurCover.querySelector(".imcd")

    if (e.target != blurCover) {
        return null
    }

    blurCover.style.backdropFilter = "blur(0px)"
    containerClone.className = ".image-container .imcd"
    setTimeout(() => {
        blurCover.innerHTML = ""
        blurCover.style.display = "none"
    }, 300)
})