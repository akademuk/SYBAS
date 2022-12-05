const card = document.querySelectorAll(".newsContentItem");

card.forEach((item) => {
  item.addEventListener("click", (cardFlipEvent) => {
    //handle click
    let flipcard = cardFlipEvent.target;
    let wrapper = flipcard.closest(".newsContentItem");
    
    // and toggle class
    wrapper.classList.toggle("is-flipped");
  });
});
