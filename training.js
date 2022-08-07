const backdrop = document.getElementById("backdrop");
console.dir(backdrop);
function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".plus")) {
    isDropdown = true;
    e.target.classList.toggle("active");
    e.target.classList.toggle("rotate");
  } else if (e.target.matches(".question h4")) {
    e.target.nextElementSibling.classList.toggle("active");
    e.target.nextElementSibling.classList.toggle("rotate");
  } else if (e.target.matches(".clarity")) {
    toggleBackdrop();
    const currentModal = e.target.nextElementSibling.nextElementSibling;
    currentModal.classList.add("visible");
    console.log(currentModal.classList);
  } else if (e.target.matches("#backdrop")) {
    const modal = e.target.nextElementSibling;
    console.dir(modal);
    toggleBackdrop();
    function closeModal() {
      modal.classList.remove("visible");
    }
    closeModal();
  } else if (e.target.matches("#close")) {
    const currentModal = e.target.parentElement.parentElement.parentElement;
    function closeModal() {
      currentModal.classList.remove("visible");
    }
    toggleBackdrop();
    closeModal();
    console.log(currentModal);
  }
});
