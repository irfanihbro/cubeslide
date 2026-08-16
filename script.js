new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1250,
    pauseOnMouseEnter: true,
  },
});

window.addEventListener("load", () => {
  const audio = document.getElementById("bgMusic");

  audio.currentTime = 0;

  audio.play().catch(() => {
    console.log("Autoplay diblokir oleh browser. Menunggu interaksi pengguna.");

    const startAudio = () => {
      audio.currentTime = 0;
      audio.play();

      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("keydown", startAudio);
    };

    document.addEventListener("click", startAudio);
    document.addEventListener("touchstart", startAudio);
    document.addEventListener("keydown", startAudio);
  });
});
