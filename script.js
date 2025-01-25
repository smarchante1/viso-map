document.addEventListener('DOMContentLoaded', () => {
  const paths = document.querySelectorAll('svg path');

  paths.forEach((path) => {
    path.addEventListener('mouseover', () => {
      console.log(
        `Hovered over path with d attribute: ${path.getAttribute('d')}`
      );
    });

    path.addEventListener('click', () => {
      console.log(
        `Clicked on path with d attribute: ${path.getAttribute('d')}`
      );
    });
  });

  console.log(paths);
});
