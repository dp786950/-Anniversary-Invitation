<script>
  const music = document.getElementById("weddingMusic");
  const viewInvitation = document.querySelector(".view-invitation");

  // Start music automatically when the page opens
  window.addEventListener("load", () => {
    music.play().catch(() => {
      // Some browsers block autoplay until the user interacts with the page.
      console.log("Autoplay was blocked by the browser.");
    });
  });

  // Pause music when leaving/closing the page
  window.addEventListener("pagehide", () => {
    music.pause();
    music.currentTime = 0;
  });

  // Pause music immediately when "VIEW INVITATION" is clicked
  if (viewInvitation) {
    viewInvitation.addEventListener("click", () => {
      music.pause();
      music.currentTime = 0;
    });
  }
</script>