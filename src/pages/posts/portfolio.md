---
layout: ../../layout/Post.astro
draft: false
id: portfolio
title: Yurika's Portfolio
publishDate: 2022-12-05
tag: indie
thumbnail: /portfolio/works/portfolio/tmb.png
thumbnailType:
link: https://yurika1202.github.io/portfolio/
github: https://github.com/yurika1202/portfolio
role:
  - デザイン
  - コーディング
skill:
  - HTML
  - CSS(DartSass)
  - JavaScript
  - TypeScript
subSkills: { SSG: Astro, デザイン: Figma }
period: 約2か月
feature:
  - オフキャンバスメニュー
  - タブ切り替え
  - フォームのバリデーションチェック
  - 動的ルーティング(ページネーション)
screenShot:
---

自身のプロフィールや制作物をまとめたポートフォリオサイトです。  
就職活動の際に採用担当の方に自身のスキルを伝えることを目的とし、過剰な演出は控えシンプルなサイト構成を目指しました。

_アクセシビリティ_

キーボード操作やスクリーンリーダー（NVDA）の検証、axe を使用したアクセシビリティチェックをしています。  
またページに合わせたメタ情報を提供し、ユーザーへ適切なページ内容を伝えるようにしています。

_もくじ_

オフキャンバスメニュー内の実績・自主制作のもくじを動的生成しています。  
また **/works** ページでは実績・自主制作のもくじを右側へ、それ以外では左側へ配置変更し、ユーザーが求める情報にアクセスしやすいようにしました。

_記事スタイル_

実績・自主制作の各詳細ページは Markdown ファイルで作成しています。  
Markdown 記法でリンクを別タブで開くよう設定するには、 `[リンクテキスト](https://hoge.com/){:target="_blank"}` と記述する必要があります。  
しかし毎回 **target** 属性を記述するのは手間がかかるので、今回は JavaScript で当サイトのドメインと一致するか正規表現で判別し、外部リンクには自動で **target** 属性を付与するようにしました。
