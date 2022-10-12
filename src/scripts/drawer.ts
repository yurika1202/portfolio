/**
 * ドロワーの開閉制御
 */

import { scrollLock } from './logics/scrollLock';

const btn = document.getElementById('js_drawerNav_btn') as HTMLButtonElement;
const nav = document.getElementById('js_drawerNav') as HTMLDivElement;

/** コンテンツ表示時の各属性値設定 */
const openContents = () => {
  btn.setAttribute('aria-expanded', 'true');
  btn.setAttribute('aria-label', 'メニューを閉じる');
  nav.setAttribute('aria-hidden', 'false');
};

/** コンテンツ非表示時の各属性値設定 */
const closeContents = () => {
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'メニューを開く');
  nav.setAttribute('aria-hidden', 'true');
};

/** ドロワー開閉ボタンクリック時の挙動 */
btn.addEventListener('click', event => {
  event.stopPropagation();
  const isShow = nav.classList.contains('is_show');
  if (!isShow) {
    nav.classList.add('is_show');
    openContents();
    document.body.classList.add('is_scrollLock');
    document.addEventListener('touchmove', scrollLock, { passive: false });
  } else {
    nav.classList.remove('is_show');
    closeContents();
    document.body.classList.remove('is_scrollLock');
    document.removeEventListener('touchmove', scrollLock);
  }
});

/** ドロワーメニュー外クリック時の挙動 */
document.addEventListener('click', e => {
  if (e.target instanceof HTMLElement && !e.target.closest('#js_drawerNav')) {
    closeContents();
  }
});
