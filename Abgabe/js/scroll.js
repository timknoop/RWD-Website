window.onload = function() {
    const container = document.querySelector('.scroll-anim');
    const svg = document.querySelector('svg');
    const progressBar = document.querySelector('.progress-bar');
    const totalLength = progressBar.getTotalLength();
      
    setTopValue(svg);
    
    progressBar.style.strokeDasharray = totalLength;
    progressBar.style.strokeDashoffset = totalLength;
    
    window.addEventListener('scroll', () => {
      setProgress(container, progressBar, totalLength);
    });
    
    window.addEventListener('resize', () => {
      setTopValue(svg);
    });
  }
  
  function setTopValue(svg) {
    svg.style.top = document.documentElement.clientHeight * 0.5 - (svg.getBoundingClientRect().height * 0.5) + 'px';
  }
  
  
  function setProgress(container, progressBar, totalLength) {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    
    const percentage = scrollTop / (scrollHeight - clientHeight);
    if(percentage === 1) {
      container.classList.add('completed');
    } else {
      container.classList.remove('completed');
    }
    progressBar.style.strokeDashoffset = totalLength - totalLength * percentage;  
  }