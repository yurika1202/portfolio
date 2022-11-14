---
layout: ../../../layout/Post.astro
draft: false
id: directLink
title: ImageURL for direct link Generator
publishDate: 2022-10-17
tag: indie
thumbnail: works/directLink/tmb.png
thumbnailType:
link: https://yurika1202.github.io/imgurl-direct/
github: https://github.com/yurika1202/imgurl-direct
role:
  - デザイン
  - コーディング
skill:
  - HTML
  - CSS(DartSass)
  - JavaScript
  - TypeScript
subSkills: { ビルド: Vite, デザイン: Figma }
period: 約20日
feature:
  - URL情報を取得・変換
  - バリデーションチェック
  - クリップボードへのコピー
  - モーダル表示時に中身のコンテンツ生成
screenShot: { pc: works/directLink/ss-pc.png, mobile: works/directLink/ss-mobile.png }
comment: GoogleDrive と DropBox から取得した共有リンクを、直リンク可能な URL に変換する Web アプリです。
---

GoogleDrive と DropBox から取得した共有リンクを、直リンク可能な URL に変換する Web アプリです。  
CodePen に画像をアップするときに手作業で書き直してましたが、自動で変換したいなあと思い、JavaScript の勉強も兼ねて作成しました。
<br />

<p class="bl_entry_pointText">バリデーションチェック</p>  
正規表現を使用し、入力値のバリデーションチェックを行っています。
<br />
<p class="bl_entry_pointText">コピー</p>  
変換後の URL コピーには ClipboardAPI を使用し、クリップボードへの書き込みを行っています。  
<br />
<p class="bl_entry_pointText">モーダル内コンテンツの生成</p>  
当アプリの使い方をモーダル内で記述していますが、内容をGoogleDriveとDropBoxで変えたかったので createElement()メソッドを使用して動的に生成するようにしました。  
またDocumentFragmentを使用し、パフォーマンスにも考慮しています。
