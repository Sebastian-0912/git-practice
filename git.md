# 說明 blob, tree, commit, branch, head 分別是什麼

## 1. Blob

- **Blob（Binary Large Object）** 是 Git 中存儲文件數據的物件，每個 blob 代表一個文件的內容，**不包含文件名或目錄結構**。
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

# commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

