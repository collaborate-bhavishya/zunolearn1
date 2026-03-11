const startPracticeBtn = document.getElementById("startPracticeBtn");
const practiceStatus = document.getElementById("practiceStatus");

if (startPracticeBtn && practiceStatus) {
  startPracticeBtn.addEventListener("click", () => {
    practiceStatus.textContent =
      "AI speaking practice is live: Repeat each sentence 3 times with clear pronunciation.";
  });
}
