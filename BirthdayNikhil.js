document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("card");
    const heartContainer = document.getElementById("heart-container");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const cutCake = document.getElementById("cutCake");
    const popup2 = document.getElementById("popup2");
    const popup3 = document.getElementById("popup3");
    const playMusic = document.getElementById("playMusic");
    const closePopup3 = document.getElementById("closePopup3");
    const birthdaySong = document.getElementById("birthdaySong");
    const popupVideo = document.getElementById("popupVideo");
    const closeVideoPopup = document.getElementById("closeVideoPopup");
    const birthdayVideo = document.getElementById("birthdayVideo");




    

    


    card.addEventListener("click", function () {
        card.classList.toggle("open");

        // Start falling hearts when the card opens
        if (card.classList.contains("open")) {
            createHearts();
            setTimeout(() => {
                popup.style.display = "flex";// Show popup after opening card
            }, 1000); // Delay to make it smooth

        }
    });
    closePopup.addEventListener("click", function () {
        popup.style.display = "none"; // Close popup
        popup2.style.display = "flex"; // Open second popup
    });
    cutCake.addEventListener("click", function () {
        alert("🎂 Happy Birthday, Nikhil! Love you always! ❤️");
        popup2.style.display = "none"; // Close cake popup
       // popup3.style.display = "flex"; // Ensure third popup is visible
       popupVideo.style.display = "flex";
        birthdayVideo.play(); // Auto-play video
        console.log("Popup 3 should be visible now"); // Debugging
    });

    playMusic.addEventListener("click", function () {
        birthdaySong.play();
    });

    closePopup3.addEventListener("click", function () {
        popup3.style.display = "none";
        birthdaySong.pause(); // Pause the song if needed
    });
// Close video popup
closeVideoPopup.addEventListener("click", function () {
    popupVideo.style.display = "none";
    birthdayVideo.pause();
    birthdayVideo.currentTime = 0; // Reset video
});


    function createHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = Math.random() * 30 + 30 + "px"; // Bigger hearts (30px to 50px)
            heart.style.animationDuration = Math.random() * 1 + 1.5+ "s"; // Faster fall duration

            heartContainer.appendChild(heart);

            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, 300);
    }
    createHearts();
        
});

