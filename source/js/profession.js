let profession = document.getElementsByClassName('profession__button');

for (let i = 0; i < profession.length; i++) {
  profession[i].addEventListener('click', function() {
    this.classList.toggle('profession__button--active');

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}
