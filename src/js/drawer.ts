import 'typed-query-selector';

/**
 * ドロワーの開閉制御
 * @param btn ドロワー開閉用のボタン
 * @param target 表示させたいメニューコンテンツ要素
 */
const drawerToggle = (btn: HTMLButtonElement, target: HTMLElement) => {
  /** メニューコンテンツ表示時の各属性値設定 */
  const openContents = () => {
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'メニューを閉じる');
    target.setAttribute('aria-hidden', 'false');
  };

  /** メニューコンテンツ非表示時の各属性値設定 */
  const closeContents = () => {
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'メニューを開く');
    target.setAttribute('aria-hidden', 'true');
  };

  /** ドロワー開閉ボタンクリック時の挙動 */
  btn.addEventListener('click', () => {
    const btnState = btn.getAttribute('aria-expanded');
    if (btnState === 'false') {
      openContents();
    } else {
      closeContents();
    }
  });

  /** ドロワーメニュー外クリック時の挙動 */
  document.addEventListener('click', e => {
    if (e.target instanceof HTMLElement && !e.target.closest('#js_drawerNav')) {
      closeContents();
    }
  });
};

export default drawerToggle;
