/**
 * 最初の要素にフォーカス移動
 * @param parentElement フォーカス要素の親
 */
export const focusFirstElement = (parentElement: HTMLElement) => {
  const focusElements = parentElement.querySelectorAll('a, button') as NodeListOf<
    HTMLAnchorElement | HTMLButtonElement
  >;
  focusElements[0].focus();
};

/**
 * ドロワー外のフォーカス制御
 */
export const focusBackContents = () => {
  const header = document.querySelectorAll('header a, header button') as NodeListOf<HTMLElement>;
  const main = document.querySelectorAll(
    'main a, main button, main input, main textarea'
  ) as NodeListOf<HTMLElement>;
  const notFocusElements = document.querySelectorAll('.js_notFocus') as NodeListOf<HTMLElement>;
  const hiddenElements = [...header, ...main, ...notFocusElements];

  hiddenElements.forEach(element => {
    if (element.classList.contains('is_focusDisable')) {
      element.removeAttribute('aria-hidden');
      [...notFocusElements].includes(element)
        ? element.setAttribute('tabindex', '0')
        : element.removeAttribute('tabindex');
      element.classList.remove('is_focusDisable');
    } else {
      element.setAttribute('aria-hidden', 'true');
      element.setAttribute('tabindex', '-1');
      element.classList.add('is_focusDisable');
    }
  });
};
