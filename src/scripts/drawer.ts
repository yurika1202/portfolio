/**
 * ドロワーの開閉制御
 */

import { scrollLock } from './logics/scrollLock';
import {
  focusElement,
  focusFirstElement,
  focusBackContents,
} from './logics/focusControl';

const btn = document.getElementById('js_drawerNav_btn') as HTMLButtonElement;
const nav = document.getElementById('js_drawerNav') as HTMLDivElement;

/** コンテンツ表示処理 */
const openContents = () => {
  nav.classList.add('is_show');
  document.body.classList.add('is_scrollLock');
  btn.setAttribute('aria-expanded', 'true');
  btn.setAttribute('aria-label', 'メニューを閉じる');
  nav.setAttribute('aria-hidden', 'false');
  focusElement(nav);
};

/** コンテンツ非表示処理 */
const closeContents = () => {
  nav.classList.remove('is_show');
  document.body.classList.remove('is_scrollLock');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'メニューを開く');
  nav.setAttribute('aria-hidden', 'true');
  focusElement(nav);
};

/** ドロワー開閉ボタンクリック時の挙動 */
btn.addEventListener('click', event => {
  event.stopPropagation();
  const isShow = nav.classList.contains('is_show');
  if (!isShow) {
    openContents();
    document.addEventListener('touchmove', scrollLock, { passive: false });
    focusFirstElement(nav);
  } else {
    closeContents();
    document.removeEventListener('touchmove', scrollLock);
  }
  focusBackContents();
});

/** ドロワーメニュー外クリック時の挙動 */
document.addEventListener('click', event => {
  if (
    event.target instanceof HTMLElement &&
    !event.target.closest('#js_drawerNav')
  ) {
    closeContents();
  }
});

/** Escapeキー選択時の挙動 */
const footer = document.querySelector('footer');
footer!.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeContents();
    btn.focus();
  }
});
