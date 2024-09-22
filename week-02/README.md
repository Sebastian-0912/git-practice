# 安裝的 nodejs 版本

我下了```node -v```查看我的版本，結果如下：

```bash
node -v #v21.7.1
```

其中:

- 21 表示 **主版本號** (Major version)
- .7 表示 **次版本號** (Minor version)
- .1 表示 **修訂號** (Patch version)

發現我安裝的版本是老師說不要用的奇數版，而原因可能是當初安裝時並不知道這樣的觀念，所以直接選擇了當初最新的版本，導致這個問題。

為了解決這個問題，所以我打算安裝nvm讓我可以同時擁有多個node.js版本，而我打算先安裝 ```20.17.0``` 長期支援版本。

# nvm 與 npm 分別是什麼

NVM 和 NPM 是 JavaScript 生態系中的兩個重要工具，它們各有不同的用途：

## 1. NVM（Node Version Manager）

NVM 是一個用來管理 Node.js 版本的工具。當你學習或開發 Node.js 應用時，可能會需要不同版本的 Node.js。在不同的專案中，可能要求你使用特定版本的 Node.js，而 NVM 可以讓你輕鬆切換、安裝和管理不同的 Node.js 版本。

### NVM 的主要功能：

- 安裝多個 Node.js 版本。
- 切換到不同的 Node.js 版本。
- 設定預設的 Node.js 版本。
- 管理專案中的 Node.js 版本，確保不同的專案使用正確的版本。

### 範例：

```bash
nvm install 16 #安裝特定版本的 Node.js
nvm use 14 #切換到已安裝的另一個版本 Node.js
nvm ls #列出本地端所安裝的 Node.js 環境
```

## 2. NPM（Node Package Manager）

NPM 是 Node.js 的套件管理工具。當你使用 JavaScript 和 Node.js 開發應用程式時，可能會需要使用第三方的函式庫或模組，而 NPM 可以幫助你輕鬆安裝和管理這些套件。

### NPM 的主要功能：

- 下載和安裝第三方的 JavaScript 函式庫（稱為「套件」或「模組」）。
- 管理專案中的依賴項目，確保所有必要的套件都已安裝。
- 發佈你的 JavaScript 套件到 NPM 資料庫，讓其他開發者可以使用。
- 處理套件的版本更新和依賴關係。

### 範例：

```bash
npm install express #使用 NPM 安裝 express 套件
npm install #安裝專案中所有定義在 package.json 中的套件：
```

## 總結

- **NVM** 是用來管理 Node.js 版本的工具，可以讓你安裝和切換不同的 Node.js 版本。
- **NPM** 是一個套件管理器，用來安裝和管理 JavaScript/Node.js 專案的依賴套件。