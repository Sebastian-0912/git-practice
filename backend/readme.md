## 觀察 package.json 的變化 

下方是 `npm install express` 的前後對比，可以發現多了`"dependencies": {"express": "^4.21.0"}`，其實就是記錄了我們安裝的依賴。然後可以發現還多了一個檔案名為`package-lock.json`，和`package.json`的差別在於`package-lock.json`是記錄我們最後真實安裝的套件版本，以及其相關的子依賴套件也一起被記錄其中，確保不同開發者可以有一至性。

- `npm install express` 以**前**的 `package.json`

```json
  {
    "name": "backend",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Sebastian",
    "license": "ISC",
    "description": ""
  }
  ```

- `npm install express` 以**後**的 `package.json`

```json
{
  // same as before.
  "dependencies": { // new
    "express": "^4.21.0"
  }
}
```

## 觀察 node_modules 裡面有什麼

而 `node_modules` 資料夾是 `npm` 安裝套件的地方。執行 `npm install express` 之後，這個資料夾會包含 `express` 和它所依賴的其他套件。

例如：在我的`node_modules`資料夾底下可以看到：

- `express/` :主要的 `Express` 套件。
- `accepts/`，`body-parser/`，`cookie-parser/` 等：這些是 `Express` 所依賴的子套件。

## 問題回答

### 1. package.json 中的 dependencies 與 devDependencies 分別是什麼？

- **dependencies**：
  - `dependencies` 是指在專案運行時必須安裝的套件。
  - 例如，`express` 是一個在伺服器運行中需要的套件，它會被列在 `dependencies` 中。

- **devDependencies**：
  - `devDependencies` 是在開發階段使用的套件，而非運行時所需的工具。例如，用於測試、開發監控的工具，像是 `nodemon` 等。
  - 部署應用程式時，這些套件可以選擇不安裝。

---

### 2. package.json 中的 scripts 這個區塊怎麼用？

- **scripts** 區塊定義了一些可以通過 `npm run` 執行的指令，讓你不必每次都手動輸入長指令。
- 例如，在 `scripts` 中定義以下指令：

  ```json
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
  ```

  - `npm start`：會運行 `node app.js`，這是啟動伺服器的指令，值得注意的是，若使用`npm start`，可以不用加上`run`。
  - `npm run dev`：會運行 `nodemon app.js`，這樣當檔案變更時伺服器會自動重啟。

---

### 3. Port number 要怎麼以環境變數來設定？

- 可以透過 `process.env.PORT` 來取得環境變數設定的 port。

- 你可以使用 `.env` 檔案來設定環境變數，並安裝 `dotenv` 套件來讀取 `.env` 中的設定：

  1. 安裝 `dotenv`：

     ```bash
     npm install dotenv
     ```

  2. 在 `app.js` 中加入：

     ```js
     require('dotenv').config();
     const port = process.env.PORT || 3000;
     ```

   - 如果 `process.env.PORT` 未設定，則會預設使用 3000。
  
  3. 建立 `.env` 檔案，並加入：

     ```
     PORT=4000
     ``` 

---

### 4. 關於哪些檔案應該要被放上 GitHub repo，為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

- 會上傳的檔案：
  - **source code**（如 `app.js`, `package.json`）：這些是專案的核心部分，應該被上傳。
  - **readme.md**：文件對專案介紹很重要。

- 不會上傳的檔案：
  - **`node_modules/`**：因為這裡面的套件是根據 `package.json` 來安裝的，並且通常檔案體積較大。
  - **`.env`**：這裡存放敏感資料（例如 API keys、database credentials），不應該上傳至公開的版本控制系統。

- **決策要素**：
  - 只上傳需要讓團隊或其他開發者能運行的檔案。
  - 避免上傳過大或包含敏感資料的檔案。

---

### 5. 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

- **CJS（CommonJS）**：
  - 用 `require()` 來引用模組，並用 `module.exports` 來匯出。
  - 範例：
    ```js
    const express = require('express'); // 匯入
    module.exports = someFunction;      // 匯出
    ```

- **ESM（ECMAScript Module）**：
  - 用 `import/export` 來管理模組，這是 ES6 引入的標準化模組語法。
  - 範例：
    ```js
    import express from 'express';      // 匯入
    export default someFunction;        // 匯出
    ```

- **兩者的區別**：
  - CJS 是 Node.js 的原生模組系統，適合早期的專案。
  - ESM 是現代 JavaScript 的標準，適合未來開發，並且可以和前端共用。

---

### 進階題：

#### **localhost 是什麼？**

- **localhost** 是指本機電腦，也就是指運行應用程式的機器。通常使用 `localhost` 是指 127.0.0.1 這個 IP 地址，它讓我們在自己的電腦上測試網路應用程式，而不需要網路連線。

#### **curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？**

- **curl** 是一個命令行工具，用於向 URL 發送請求並檢查其回應。可以用來測試網頁或 API 是否能正常運行。
- 常用參數：
  - `-X [GET/POST]`：指定 HTTP 方法。
  - `-d`：用於 POST 請求中傳送資料。
  - `-H`：加入 header 。
  - 範例：
    ```bash
    curl -X GET http://localhost:3000/
    ```
