# ATable

## オプション

なし

## データ定義

| キー  | 型 | 初期値 |
| ----- | ------- | ------- |
| table | テキスト | &lt;tr&gt;&lt;td&gt;cell&lt;/td&gt;&lt;/tr&gt; |

## コンポーネント名

`ATable`

## 備考

- ATableコンポーネントは1つだけ定義して使い回してください。（コンポーネント名を`ATable`以外にした場合は正しく動作しません。）
- a-table.jsとComponentBlocksプラグインを組み合わせる時の都合により`<table>``</table>`タグは保存データに含まれませんので、HTML生成時に追加してください
