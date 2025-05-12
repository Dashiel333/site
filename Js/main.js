$(document).ready(function(){


  $('.center-slick').slick({
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    arrows: true,
    dots: true,
  });

  const toggleButtons = document.querySelectorAll('.toggle-button')

  toggleButtons.forEach(element => {
    element.addEventListener('click', toggleContent)
  });

  function toggleContent() {
    const parentBlock = this.closest(".greybutton")
    console.log('this', this)
    
    if (parentBlock.classList.contains("collapsed")) {
      this.innerHTML = "−"
    } else {
      this.innerHTML = "+"
    }
    parentBlock.classList.toggle('collapsed');
  }
});