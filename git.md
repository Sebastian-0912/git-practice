# 說明 blob, tree, commit, branch, head 分別是什麼

## 1. Blob

- **Blob（Binary Large Object）** 是 Git 中儲存文件數據的物件，每個 blob 代表一個文件的內容，**不包含文件名或目錄結構**。
- **Blob 的特點**：
  - 每個 blob 是文件的二進位內容，並根據文件內容生成一個 SHA-1 hash值作為唯一識別碼。
  - 當文件內容變更時，即使文件名相同，Git 也會生成一個新的 blob。

  **範例**：假設我們有一個文件 `example.txt`，其內容為「Hello World」。Git 會將這個內容保存為一個 blob，並計算它的 SHA-1 hash來唯一識別這個文件內容。

---

## 2. Tree

- **Tree** 是 Git 中用來表示目錄結構的物件。每個 tree 對應一個目錄，裡面可以包含多個 blob（文件）和其他 tree（子目錄）。
- **Tree 的特點**：
  - Tree 保存了文件名和文件夾結構，並通過 SHA-1 hash值指向 blob 或其他 tree。
  - Tree 可以理解為 Git 中的「目錄」，它通過引用 blob 和子 tree 來構建文件系統的樹狀結構。

  **範例**：假設我們有一個目錄 `src`，裡面有兩個文件 `file1.txt` 和 `file2.txt`。這個目錄會被保存為一個 tree，該 tree 包含兩個 blob（分別代表這兩個文件的內容）。

---

## 3. Commit

- **Commit** 是 Git 中保存項目狀態快照的物件，每個 commit 表示一次提交操作。Commit 包含了當前項目的完整快照和一些元數據，如作者、提交時間、提交信息等。
- **Commit 的特點**：
  - Commit 指向一個 tree，該 tree 表示整個項目的文件結構（包括所有的 blob 和子 tree）。
  - Commit 也會記錄**父 commit**（前一次提交）的位置，這樣就形成了提交歷史的鏈條。
  - 每個 commit 也有一個唯一的 SHA-1 hash值。

  **範例**：假設我們提交了一次變更，Git 會生成一個 commit，該 commit 保存了當前項目的狀態（即指向當前的 tree），並鏈接到前一個 commit。

---

## 4. Branch

- **Branch（分支）** 是一個指向特定 commit 的**可移動指標**。每當我們在一個分支上進行提交時，該分支指向的 commit 就會更新到最新的提交。
- **Branch 的特點**：
  - 分支讓你可以同時在多個並行線上開發，而不影響主線。
  - 默認的分支通常是 `main` 或 `master`，但你可以創建任意數量的分支來進行開發。

  **範例**：當你在 `feature` 分支上進行開發時，該分支會指向最新的 commit，而其他分支的提交不會受到影響。

---

## 5. HEAD

- **HEAD** 是一個 Git 的指標，它表示當前檢查出的 commit 或分支。通常，`HEAD` 會指向某個分支。
- **HEAD 的特點**：
  - 當 `HEAD` 指向某個分支時，該分支的最新 commit 就是當前的開發狀態。
  - 如果 `HEAD` 指向某個具體的 commit 而不是分支，則進入了「分離的 `HEAD` 狀態」（detached HEAD）。

  **範例**：當你檢查出分支 `main` 時，`HEAD` 會指向 `main` 分支，並隨著 `main` 的提交更新而移動。

# 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼

我做了一個實驗，首先`git init`創造一個`.git`目錄，可以觀察到目前的`.git`結構如下：

```bash
.
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags

```

創建一個資料夾`dir`後，`.git`結構如下：

```bash
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags

```

再創建一個檔案，`./dir/file`後，`.git`結構如下：

```bash
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```

`git add .`指令後，`.git/objects`多了一個`e6`,`.git`結構如下：

```bash
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── objects
│   ├── e6
│   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```c

`git commit -m "first commit"`指令後，`.git`結構如下：

```bash
.git
├── COMMIT_EDITMSG
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── logs
│   ├── HEAD
│   └── refs
│       └── heads
│           └── master
├── objects
│   ├── 2f
│   │   └── b0c97492f580acf34fc94c5af7388b7ec28e3e
│   ├── b4
│   │   └── c3cc91598b6469bf7036502b8ca2bd563b0d0a
│   ├── df
│   │   └── 2b8fc99e1c1d4dbc0a854d9f72157f1d6ea078
│   ├── e6
│   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│   ├── info
│   └── pack
└── refs
    ├── heads
    │   └── master
    └── tags
```


# Commit Message 應該怎麼寫比較好？應該有什麼 `style` 嗎？

我在網路上找到一個名為**Conventional Commits**[（連結）](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13) 的規範，commit message 應遵循一個具體且清晰的結構。這樣可以提升 commit 記錄的可讀性，使團隊更容易追蹤變更。以下是這種風格的完整格式及說明：

---

## Commit Message 格式

```bash
<type>(<optional scope>): <description>

<optional body>

<optional footer>
```

### 1. 標題

- **`<type>`**: 描述這次提交的類型，必填。
- **`<optional scope>`**: 說明變更的範圍（模組、功能），可選。
- **`<description>`**: 簡短描述這次變更，必填，應使用祈使句現在式，不超過 50 個字元。

### 2. Body

- 可選部分，用來詳細說明這次提交的動機，對比過去行為。
- 應使用祈使句現在式，例如：「change」而非「changed」或「changes」。
- 可以在這裡提到相關 issue ID，並解釋問題解決方案。

### 3. Footer

- 可選部分，提到任何破壞性變更（breaking changes）或是這次提交參考的 issue。
- 若有破壞性變更，應以 `BREAKING CHANGES:` 開頭，並解釋具體的變更影響。

---

## Commit Message 的類型 (`<type>`)

| Type      | 說明 |
|-----------|----------------|
| `feat`    | 新增功能或移除功能。 |
| `fix`     | 修復 bug。 |
| `refactor`| 代碼重構，不改變 API 行為。 |
| `perf`    | 提升效能的代碼重構。 |
| `style`   | 不影響功能的修改（空白、格式、分號等）。 |
| `test`    | 添加或修正測試代碼。 |
| `docs`    | 僅影響文件的修改。 |
| `build`   | 修改構建工具、CI 管線、依賴、版本等。 |
| `ops`     | 與基礎設施、部署等運維相關的修改。 |
| `chore`   | 雜項，如修改 `.gitignore` 等。 |

---

## Breaking Changes 指示

- 若提交包含破壞性變更，在 `type` 後加入 `!`。
- 在 Footer 中詳細說明破壞性變更，使用 `BREAKING CHANGES:`。

---

## 範例

```bash
feat: add email notifications on new direct messages

feat(shopping cart): add the amazing button
```

```bash

feat!: remove ticket list endpoint

refers to JIRA-1337

BREAKING CHANGES: ticket enpoints no longer supports list all entites.

```

---

## 總結

- **標題** 必須簡潔且明確，使用現在式動詞來描述變更。
- **可選的 Body** 應該詳細說明變更的動機和對比過去的行為，並提到相關 issue。
- **Footer** 用來記錄破壞性變更以及關聯的 issue 編號。

這樣的規範有助於保持 commit 記錄的一致性，尤其在團隊合作和自動化流程中，`Conventional Commits` 是非常有用的標準。
