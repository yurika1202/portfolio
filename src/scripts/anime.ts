/**
 * アニメーション
 */
import 'typed-query-selector';

const animationTargets = document.querySelectorAll('.js_anime');

const options = {
  root: null,
  rootMargin: '20px 0px -70px',
  threshold: 0,
};
const observer = new IntersectionObserver(scrollInAnime, options);
animationTargets.forEach(animationTarget => {
  observer.observe(animationTarget);
});

/**
 * rootと交差時にふわっと表示させる
 */
function scrollInAnime(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry: IntersectionObserverEntry, index) => {
    const delay = index * 300;
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('is_active');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}
