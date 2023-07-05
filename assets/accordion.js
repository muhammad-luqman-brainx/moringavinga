var summaries = document.querySelectorAll('summary');
summaries.forEach(function (summary) {
  summary.addEventListener('click', function () {
    var content = this.nextElementSibling;
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});