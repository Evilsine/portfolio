gsap.from('.loader-title',{
    duration: 0.5, opacity:0, y: 50, stagger:0.1, ease: "back.out(1.7)", ease: "power2"
})

window.addEventListener("load", function(){
    const loader = document.querySelector(".loader")
    loader.classList.add("loader-fade")

    gsap.from('.intro-animation',{
        delay: 1, duration: 1, opacity:0, y: 50, stagger:0.4, ease: "back.out(1.7)", ease: "power2"
    })

    gsap.to("em",{
        delay: 2, duration: 1, color:"#535353", stagger: 0.2, ease: "power2"
    })
})