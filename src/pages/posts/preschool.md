---
layout: ../../layout/Post.astro
draft: false
id: preschool
title: こども園のサイトと採用サイトのコーディング
publishDate: 2021-10-01
tag: practical
thumbnail: /portfolio/works/preschool/tmb.png
thumbnailType: icon
link:
github:
role:
  - コーディング
skill:
  - HTML
  - CSS(DartSass)
  - JavaScript
subSkills: { デザイン: illustrator }
period: 約1か月
feature:
  - スクロールアニメーション
  - スライダー
  - アコーディオン
  - モーダル
  - Googleフォームの非同期通信
screenShot:
---

**【実績詳細公開不可】**  
[CrowdWorks のページはこちら](https://crowdworks.jp/public/employees/2210160)  
<br>
こども園のサイトと教員採用サイトのコーディングを担当させていただきました。
<br>

_ポップな雰囲気づくり_

イラストのあしらいが多く使用されているデザインだったので、IntersectionObserverAPI を使用して各イラスト要素に動きをつけました。  
ある箇所では「観覧車のようなアニメーションをつけてほしい」とのご要望があったため、以下のようなアニメーションを JavaScript で作成しました。
<br>

---

- 回転は画面がスクロールインしたら開始
- hover で回転を静止させ、テキストコンテンツを表示

<br>
<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="poKqbPd" data-user="yurika1202" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/yurika1202/pen/poKqbPd">
  animation - ferrisWheel</a> by Yurika (<a href="https://codepen.io/yurika1202">@yurika1202</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
