# JavaScript V2 Practice

JavaScript学習の記録用リポジトリ。章ごとにフォルダを分けて進める。

## 学習ログ

### chapter1

- `index.html` から `main.js` を読み込んで `alert("hello")` を表示する練習。
- **つまずいた点**: `<script src="main.js">` は、HTMLファイルからの相対パスで解決される。
  `index.html` が `chapter1/` フォルダの中にあるのに `main.js` をプロジェクト直下に置いていたため、
  パスが解決できず404で読み込み失敗 → alertが実行されなかった。
- **解決策**: `main.js` を `index.html` と同じ `chapter1/` フォルダ内に置くことでパスを一致させた。
- **学び**: script/link/imgなどのパス指定は常にHTMLファイルの場所が基準になる。ブラウザの開発者ツール（F12）のConsole/NetworkタブでHTTPエラー（404など）を確認するのが読み込み失敗の切り分けに有効。
