document.addEventListener("DOMContentLoaded", function() {
    function updateCursor() {
      let bgColor = window.getComputedStyle(document.body).backgroundColor;
      let cursorColor, cursorHoverColor;
  
      if (bgColor === 'rgb(0, 0, 0)') { // Fundo preto
        cursorColor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" stroke="%23ffffff" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>';
        cursorHoverColor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" stroke="%23000000" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>';
      } else { // Qualquer outro fundo
        cursorColor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23e3002f" stroke="%23e3002f" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>';
        cursorHoverColor = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" stroke="%23000000" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>';
      }
  
      document.body.style.cursor = `url('${cursorColor}') 10 10, auto`;
      let links = document.querySelectorAll('a');
      links.forEach(link => {
        link.style.cursor = `url('${cursorColor}') 10 10, auto`;
      });
  
      let menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach(item => {
        item.style.cursor = `url('${cursorColor}') 10 10, auto`;
        item.addEventListener('mouseover', function() {
          item.style.cursor = `url('${cursorHoverColor}') 10 10, auto`;
        });
        item.addEventListener('mouseout', function() {
          item.style.cursor = `url('${cursorColor}') 10 10, auto`;
        });
      });
    }
  
    updateCursor();
    window.addEventListener("resize", updateCursor);
    window.addEventListener("scroll", updateCursor);
  });
  