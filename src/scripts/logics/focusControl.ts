/**
 * 最初の要素にフォーカス移動
 * @param parentElement フォーカス要素の親
 */
export const focusFirstElement = (parentElement: HTMLElement) => {
  const focusElements = parentElement.querySelectorAll('a, button') as NodeListOf<HTMLAnchorElement | HTMLButtonElement>;
  focusElements[0].focus();
};

/**
 * ドロワーコンテンツのフォーカス制御
 * @param parentElement フォーカス要素の親
 */
export const focusElement = (parentElement: HTMLElement) => {
  const focusElements = parentElement.querySelectorAll('a, button') as NodeListOf<HTMLAnchorElement | HTMLButtonElement>;
  focusElements.forEach(element => {
    if (element.getAttribute('tabindex') === '-1') {
      element.setAttribute('tabindex', '0');
    } else {
      element.setAttribute('tabindex', '-1');
    }
  });
};

/**
 * ドロワー外のフォーカス制御
 */
export const focusBackContents = () => {
  const header = document.querySelectorAll('header a, header button') as NodeListOf<HTMLElement>;
  const main = document.querySelectorAll('main a, main button') as NodeListOf<HTMLElement>;
  const notFocusElements = document.querySelectorAll('.js_notFocus a, .js_notFocus button') as NodeListOf<HTMLElement>;
  const hiddenElements = [...header, ...main, ...notFocusElements];

  hiddenElements.forEach(element => {
    if (element.classList.contains('js_focus_disabled')) {
      element.removeAttribute('aria-hidden');
      element.removeAttribute('tabindex');
      element.classList.remove('js_focus_disabled');
    } else {
      element.setAttribute('aria-hidden', 'true');
      element.setAttribute('tabindex', '-1');
      element.classList.add('js_focus_disabled');
    }
  });
};
