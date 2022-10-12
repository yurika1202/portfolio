export {};
window.addEventListener('load', () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]') as NodeListOf<HTMLImageElement>;
    images.forEach(img => {
      if (img.dataset.src != null) {
        img.src = img.dataset.src;
      }
    });
    const imageSrcset = document.querySelectorAll('img[data-srcset]') as NodeListOf<HTMLImageElement>;
    imageSrcset.forEach(img => {
      if (img.dataset.srcset != null) {
        img.srcset = img.dataset.srcset;
      }
    });
    const sources = document.querySelectorAll('source[data-srcset]') as NodeListOf<HTMLSourceElement>;
    sources.forEach(source => {
      if (source.dataset.srcset != null) {
        source.srcset = source.dataset.srcset;
      }
    });
  } else {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
});
