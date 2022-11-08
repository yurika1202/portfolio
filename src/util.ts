import type { MarkdownInstance } from 'astro';
import type { PostType } from '@/types';

/**
 * サムネイルタイプ別にCSSクラスを作成
 * @param type サムネイルタイプ
 * @returns サムネイルCSSクラス名
 */
export const thumbnailsClassType = (type: string) => {
  switch (type) {
    case 'icon':
      return 'el_thumbnails__icon';
    case 'noImg':
      return 'el_thumbnails__noImg';
    default:
      break;
  }
};

/**
 * 投稿日の新しい順にソート
 * @param posts ソート対象の配列posts
 * @returns ソート処理後に上書きした配列posts
 */
export const sortedPosts = (posts: MarkdownInstance<PostType>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf()
  );
};
