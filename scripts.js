if (!document.getElementById("price_buttons"))
{
    targetThing = document.querySelector(".singleItem");
    newsImgAnims = document.querySelectorAll(".animNewsImg");
    newsHeadAnim = document.querySelectorAll(".animNewsHead");

    const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach(entry =>
        {
            if (entry.isIntersecting)
            {
                console.log("The div is now on the screen!");
                newsImgAnims.forEach( animatable => {
                    animatable.classList.add("transform");
                });
                newsHeadAnim.forEach( animatable => {
                    animatable.classList.add("active");
                });
                observer.unobserve(targetThing);
            }
        });
    });

    observer.observe(targetThing);
}
