// Todo: 整理, scss とか対応

module.exports = {
  rules: {
    "color-no-invalid-hex": true, // 無効な色コード
    "function-calc-no-invalid": true, // 無効な calc 式
    "function-linear-gradient-no-nonstandard-direction": true, // 無効な linear-gradient
    "string-no-newline": true, // エスケープなしの改行なし

    "no-descending-specificity": true, // 高レベルセレクタの後の低レベルセレクタなし
    "declaration-no-important": true, // !important なし
    "no-duplicate-at-import-rules": true, // 重複するインポートなし

    "function-whitespace-after": "always", // 関数後のスペース
    "at-rule-name-case": "lower", // ルール名に小文字を使用
    "media-feature-name-case": "lower", // メディアクエリに小文字を使用
    "property-case": "lower", // プロパティ名に小文字を使用
    "selector-type-case": "lower", // セレクタに小文字を使用
    "selector-pseudo-class-case": "lower", // 疑似クラスに小文字を使用
    "selector-pseudo-element-case": "lower", // 疑似要素に小文字を使用
    "function-name-case": "lower", // 関数名に小文字を使用
    "unit-case": "lower", // 単位に小文字を使用
    "value-keyword-case": "lower", // キーワードに小文字を使用
    "no-unknown-animations": true, // 存在しないアニメーション名
    "unit-no-unknown": true, // 不明なユニットなし
    "property-no-unknown": true, // 不明なプロパティなし
    "selector-pseudo-class-no-unknown": true, // 不明な擬似クラスなし
    "selector-pseudo-element-no-unknown": true, // 不明な疑似要素なし
    "selector-type-no-unknown": true, // 不明な要素なし
    "media-feature-name-no-unknown": true, // 不明なメディアクエリなし
    "at-rule-no-unknown": true, // 不明な @ ルールなし
    "declaration-block-no-duplicate-properties": true, // 重複するプロパティ
    "declaration-block-no-shorthand-property-overrides": true, // 省略プロパティで上書きなし
    "block-no-empty": true, // 空のブロックなし
    "comment-no-empty": true, // 空のコメントなし
    "no-extra-semicolons": true, // 不要なセミコロン
    "font-family-no-duplicate-names": true, // 重複するフォント指定
    "shorthand-property-no-redundant-values": true, // 短縮可能な値
    "declaration-block-no-redundant-longhand-properties": true, // 短縮可能なプロパティ
    "function-comma-space-before": "never", // 関数コンマ前のスペースなし
    "function-comma-space-after": "always", // 関数コンマ後のスペースあり
    "function-parentheses-newline-inside": "never-multi-line", // 関数括弧の改行なし
    "function-parentheses-space-inside": "never", // 関数カッコ内のスペースなし
    "value-list-comma-newline-before": "never-multi-line", // 複数行値リストコンマ前の改行なし
    "value-list-comma-newline-after": "always-multi-line", // 複数行値リストコンマ後の改行あり
    "value-list-comma-space-before": "never", // 値リストコンマ前のスペースなし
    "value-list-comma-space-after": "always-single-line", // 値リストコンマ後にスペースあり
    "value-list-max-empty-lines": 0, // 値リストの空行 0
    "number-leading-zero": "always", // 少数先行の 0. を要求
    "number-no-trailing-zeros": true, // 末端の 0 なし
    "string-quotes": "double", // ダブルクオートを使用
    "length-zero-no-unit": true, // 0 の単位なし
    "no-duplicate-selectors": [true, { severity: "warning" }], // 重複するセレクタ
    "declaration-colon-newline-after": "always-multi-line", // マルチラインはコロン後改行
    "declaration-colon-space-before": "never", // コロン前のスペースなし
    "declaration-colon-space-after": "always", // コロン後にスペース

    "selector-max-empty-lines": 0, // セレクタ内の空行なし
    "declaration-block-single-line-max-declarations": 0, // 一行に可能な宣言 1
    "selector-no-qualifying-type": [true, { ignore: "attribute" }], // セレクタの修飾なし
    "declaration-block-semicolon-newline-before": "never-multi-line", // セミコロン前の改行なし
    "declaration-block-semicolon-newline-after": "always", // セミコロン後に改行
    "declaration-block-trailing-semicolon": "always", // 末端のセミコロン
    "block-closing-brace-empty-line-before": "never", // ブロック末端の空行なし
    "block-closing-brace-newline-after": "always", // ブロック終了後に改行
    "block-closing-brace-newline-before": "always", // ブロック終了前に改行
    "block-opening-brace-newline-before": "always-single-line", // ブロック開始ブレースで改行
    "block-opening-brace-newline-after": "always", // ブロック開始ブレースで改行
    "block-opening-brace-space-before": "always", // ブロック開始ブレース前にスペース
    "selector-attribute-brackets-space-inside": "never", // セレクタブランケット内スペースなし
    "selector-attribute-operator-space-before": "never", // 属性演算子前にスペース
    "selector-attribute-operator-space-after": "never", // 属性演算子後にスペース
    "selector-combinator-space-before": "always", // セレクタ演算子前のスペース
    "selector-combinator-space-after": "always", // セレクタ演算子後のスペース
    "selector-descendant-combinator-no-non-space": true, // セレクタ後の複数スペース、改行なし
    "selector-pseudo-element-colon-notation": "double", // 疑似要素にダブルコロンを使用
    "selector-pseudo-class-parentheses-space-inside": "never", // 擬似クラス括弧にスペースなし
    "selector-list-comma-newline-before": "never-multi-line", // セレクタリストのコンマの前に改行なし
    "selector-list-comma-newline-after": "always-multi-line", // セレクタリストコンマの後に改行
    "selector-list-comma-space-before": "never", // セレクタリストコンマの後のスペースなし
    "selector-list-comma-space-after": "always", // セレクタリストコンマの後のスペース
    "rule-empty-line-before": ["always", { except: ["first-nested"] }], // ルール間に改行が必要
    "media-feature-colon-space-before": "never", // メディアクエリコンマの前のスペースなし
    "media-feature-colon-space-after": "always", // メディアクエリコロンの後のスペース
    "media-feature-parentheses-space-inside": "never", // メディア括弧内のスペースなし
    "media-feature-range-operator-space-before": "never", // メディアクエリ比較前のスペースなし
    "media-feature-range-operator-space-aftor": "never", // メディアクエリ比較後のスペースなし
    "media-query-list-comma-newline-before": "never-multi-line", // メディアクエリリストカンマ前の改行なし
    "media-query-list-comma-newline-after": "always-multi-line", // メディアクエリリストカンマ後に改行
    "media-query-list-comma-space-before": "never", // メディアクエリリストコンマ前のスペースなし
    "media-query-list-comma-space-after": "always", // メディアクエリリストコンマ後にスペース
    "at-rule-empty-line-before": "always", // ルール前に改行
    "at-rule-name-newline-after": "always-multi-line", // ルール名後に改行
    "at-rule-name-space-after": "always-single-line", // ルール名語にスペース
    "at-rule-semicolon-newline-after": "always", // @ ルールセミコロン後に改行
    "at-rule-semicolon-space-before": "never", // @ ルールセミコロン前のスペースなし
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        gnore: ["after-comment", "stylelint-commands"]
      }
    ], // コメント前に空行
    "comment-whitespace-inside": "always", // コメント内にスペース
    "max-empty-lines": 1 // 最大空行
    // color-named: never,  # 名前付き色なし
  }
};
