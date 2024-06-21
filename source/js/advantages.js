let advantages = document.getElementsByClassName('advantages__button');

for (let i = 0; i < advantages.length; i++) {
  advantages[i].addEventListener('click', function() {
    this.classList.toggle('advantages__button--active');

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}
