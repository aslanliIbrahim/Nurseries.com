const crslContent = document.querySelectorAll(".caruesel-content");

const cardAnimatie = [
    {transform: "scale(1)"},
    {transform: "scale(1.02)"},
    {transform: "scale(1.03)"},
    {transform: "scale(1.04)"}
]

const cardanimation = {
    duration:10000,
    iterations:1
}

for (let i = 0; i < crslContent.length; i++) {

    const currentContent = document.querySelectorAll(".caruesel-content.animation-class");
    
    
    if (crslContent[i].dataset.target === "1") {
        crslContent[i].addEventListener("mouseover", function(){
            crslContent[i].animate(cardAnimatie,cardanimation)
        });
        console.log();
        
    } else if(crslContent[i].dataset.target === "2") {
        crslContent[i].addEventListener("mouseover", function(){
            crslContent[i].animate(cardAnimatie,cardanimation)
        })
    } else if(crslContent[i].dataset.target === "3"){
        crslContent[i].addEventListener("mouseover", function(){
            crslContent[i].animate(cardAnimatie,cardanimation)
        })
    } else if(crslContent[i].dataset.target === "4"){
        crslContent[i].addEventListener("mouseover", function(){
            crslContent[i].animate(cardAnimatie,cardanimation)
        })
    }

}