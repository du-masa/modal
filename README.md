# modalをvue.jsで作る

## get started

```bash
// https
$ git clone https://github.com/zap-mueda/modal.git

// ssh
$ git clone git@github.com:zap-mueda/modal.git

$ npm i

$ npm start
```

## 編集ファイル

- html `public/index.vue.html`
- js `assets/vue/vue-main.js`
- scss `assets/vue/vue-style.scss`

## 問題

### 1. modal1ボタンのモーダル起動させる

modal1ボタンを押したら、対象となるモーダルを起動させる処理を書きましょう。
*現時点で閉じる処理はなくて良いです

### 2. モーダルを閉じる処理

1で起動させたモーダルを閉じる処理を書きましょう。
モーダルは「閉じるボタン」と「グレイアウトされた背景」がクリックされた閉じるとします。

### 3. 残り３つのモーダルも動くようにする

modal1ボタンで行った処理を、modal2、3、4のボタンにも実装しましょう。

### 4. モーダルで表示するタイトルやテキストをjsで管理する。

HTMLに静的に書かれているモーダル表示用のデータをjsで管理して、表示しましょう。

*ヒント: 配列やオブジェクト、vue.jsのv-forをうまく活用してみましょう。
