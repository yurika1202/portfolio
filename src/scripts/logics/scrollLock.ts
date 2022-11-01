/**
 * スクロール可不可
 * @param element スクロール可能対象要素
 */
const isScrollable = (element: Element) => element.clientHeight < element.scrollHeight;

/**
 * 指定要素以外のスクロール制御（iOS Safari）
 */
export const scrollLock = (event: TouchEvent) => {
  const canScrollElement = (event.target as HTMLElement)?.closest('.is_canScroll');
  if (canScrollElement === null) {
    event.preventDefault();
    return;
  }

  if (canScrollElement && isScrollable(canScrollElement)) {
    event.stopPropagation();
  } else {
    event.preventDefault();
  }
};
