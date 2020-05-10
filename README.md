Vue.js and Storybook example
===

## 起動準備

1. プロジェクトの root ディレクトリに移動します。

```bash
$ cd my-project
```

2. 依存ライブラリをインストールします。

```bash
$ npm i
```

## Storybook 起動手順

1. プロジェクトの root ディレクトリに移動します（起動手順からそのまま続けている場合は不要です）。

```bash
$ cd my-project
```

2. Storybook の起動コマンドを実行します。

```bash
$ npm run storybook
```

## アプリ起動手順

1. プロジェクトの root ディレクトリに移動します（起動手順からそのまま続けている場合は不要です）。

```bash
$ cd my-project
```

2. アプリの起動コマンドを実行します。

```bash
$ npm start
```

3. ブラウザからアクセスします。

http://localhost:8080

## Qiita 記事の内容と変えた点

#### 依存ライブラリの解決に yarn ではなく npm コマンドを使用
Vue.js のプロジェクト作成時にデフォルトで選ばれているためこちらを使用しています。
もし yarn の方がお好みの場合は `package-lock.json` ファイルを削除いただき、 `$ yarn` コマンドを実行くださいませ。

#### `@storybook/vue` パッケージは `devDependencies` としてインストール
Qiita 記事中では `yarn add @storybook/vue` と書いてありますが、この場合だと `dependencies` としてインストールされてしまいます。
Storybook は開発時にしか使わないためこれは間違いなので、`devDependencies` としてインストールしております。

#### Storybook の設定にて新しい記法を使用
Qiita 記事中で書かれている Storybook の設定方法は古いです。
本リポジトリは Storybook 公式ドキュメントに従った、新しい書き方で設定しております。

#### select ノブを使用
Qiita 記事中では text ノブが使用されており、'sizeとcolorはここにあるやつを使ってください' と書かれています。
しかし、特定の文字列のみ受け付ける場合は select ノブの方が使いやすいと思います。

#### `Docs addon(addon-docs)` を使用
Qiita 記事中では `storybook-addon-vue-info` が使用されておりますが、このプラグインは廃止されております。

https://github.com/pocka/storybook-addon-vue-info
> This addon is deprecated due to the retirement of official addon-info.
> Storybook now has an alternative addon, called Docs addon(addon-docs), which comes with native Vue.js support and automatically props/events/slots documentation powered by vue-docgen-api.

代わりに `@storybook/addon-docs` を使用しております。

## 参考資料

- [Storybookがなぜ必要か？(Vue.js編) - Qiita](https://qiita.com/masaakikunsan/items/dad8d84807918f3a43cb)
- [Storybook for Vue](https://storybook.js.org/docs/guides/guide-vue/)
- [@storybook/addon-docs - npm](https://www.npmjs.com/package/@storybook/addon-docs)
- [@storybook/addon-knobs - npm](https://www.npmjs.com/package/@storybook/addon-knobs)
- [@storybook/addon-notes - npm](https://www.npmjs.com/package/@storybook/addon-notes)
- [@storybook/addon-viewport - npm](https://www.npmjs.com/package/@storybook/addon-viewport)
