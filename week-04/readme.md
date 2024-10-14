# week-04

## Question A

1. **/etc 是什麼的縮寫？這裡通常都放哪些檔案？**
/etc 是 "et cetera" 的縮寫，表示它包含不適合其他特定目錄的各種系統檔案。它主要用來存放系統和應用程序的配置檔案。這些檔案包括啟動腳本、網路配置、服務設定檔等等。例如，/etc/ssh/sshd_config 是 SSH 伺服器的配置檔案。[參考連結](https://zh-tw.eitca.org/cybersecurity/eitc-is-lsa-linux-system-administration/linux-filesystem/filesystem-layout-overview/examination-review-filesystem-layout-overview/what-is-the-purpose-of-the-etc-directory-in-the-linux-file-system/)

2. **/var 這裡通常都放哪些檔案？**
/var 目錄用來存放變動的數據，"var" 是 "variable" 的縮寫。常見的數據類型有日誌文件（如 /var/log 內的系統日誌）、臨時文件（如 /var/tmp）、郵件數據（如 /var/mail），以及伺服器運行時的數據，如網頁伺服器生成的數據。[參考連結](https://www.cnblogs.com/zhouhbing/p/4516522.html)

3. **/boot 這裡通常都放哪些檔案？**
/boot 目錄包含系統啟動時使用的核心（kernel）和啟動載入程式（boot loader）的文件。典型的檔案如 vmlinuz（Linux kernel）和 grub 設定檔等。

4. **`$PATH`環境變數的作用是什麼？**
`$PATH (一定是大寫)`  環境變數用來定義系統在命令列中執行命令時，會依次搜索的目錄路徑。當你輸入一個命令時，系統會在 `$PATH` 定義的目錄中尋找該命令的可執行檔案。例如，當你輸入 ls 時，系統會在 `$PATH` 中的目錄中尋找並執行 ls 命令。[參考連結](https://linux.vbird.org/linux_basic/centos7/0220filemanager.php#dir_path)

5. **which 指令的作用？**
which 指令用來顯示某個命令的可執行檔案的路徑。例如，which node 可以顯示 node 命令的安裝位置。[參考連結](https://linux.vbird.org/linux_basic/centos7/0220filemanager.php#dir_path)

## Question B

1. **在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中**
`ubuntu@18.181.193.21`。

2. **什麼是 instance type?**
Instance type 是指 AWS EC2 instance 的硬體配置，例如 CPU、記憶體、儲存空間和網路容量。如這次的 t2.micro。[參考連結](https://aws.amazon.com/tw/ec2/instance-types/)

3. **什麼是 Nginx？有哪些用途與特性？**
Nginx 是一款輕量級、高效能的網頁伺服器。它的特性包括處理靜態內容、作為反向代理伺服器、負載均衡等。Nginx 特別擅長於高併發環境下處理大量的 HTTP 請求。其中，正向代理負責隱藏 client，反向代理負責隱藏server。[參考連結](https://medium.com/starbugs/web-server-nginx-1-cf5188459108)

4. **pm2 套件是什麼？有什麼用處？**
PM2 是一個 Node.js 的進程管理工具，用來管理和持續運行 Node.js 應用。它提供日誌管理、自動重啟、進程監控等功能，適合在生產環境下部署應用。所以我們可以使用它，讓我們即便沒有一直在server上，仍然可以訪問我們啟動的 `app.js`。[參考連結](https://ithelp.ithome.com.tw/m/articles/10214173)

5. **步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?**
`proxy` 是指代理伺服器，它在客戶端與後端伺服器之間轉發請求。`Nginx` 作為反向代理伺服器，將客戶端的請求轉發到位於本地的 Express 應用程式（localhost:3000），避免將 Express 直接暴露在公網上，增強安全性和性能。

   - Reverse Proxy vs Forward Proxy： 正向代理（Forward Proxy）是客戶端透過代理伺服器訪問外部網路；反向代理（Reverse Proxy）是代理伺服器接收來自外部的請求並轉發給內部的伺服器。[參考連結](https://medium.com/starbugs/web-server-nginx-1-cf5188459108)

6. **在 readme 中提供步驟 9 的 Nginx 設定檔**
```
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/www/html;

  # Add index.php to the list if you are using PHP
  index index.html index.htm index.nginx-debian.html;

  server_name 18.181.193.21;

  location / {
      proxy_pass http://localhost:3000;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
  }
}
```

7. **Security Group 是什麼？用途為何？有什麼設定原則嗎？**
Security Group 是 AWS 中的虛擬防火牆，控制 EC2 instance 的進入和離開流量。設定原則包括只開放必要的端口來最小化安全風險。通常需要開放 22 (SSH) 和 80 (HTTP) 端口來允許管理和 HTTP 流量。[參考連結](https://medium.com/@awseducate.cloudambassador/%E6%8A%80%E8%A1%93%E5%88%86%E4%BA%AB-security-group%E5%92%8Ciam%E7%9A%84%E5%B7%AE%E5%88%A5%E7%82%BA%E4%BD%95-942d303565b7#:~:text=AWS%20Security%20Group%20%E5%8F%AF%E4%BB%A5%E8%A2%AB,%E5%88%B0%E6%82%A8%E7%9A%84EC2%20%E5%AF%A6%E4%BE%8B)

8. **什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？**
`sudo` 是 "Super User Do" 的縮寫，讓普通使用者可以執行需要管理員權限的指令。如果指令需要修改系統設置或安裝軟體，通常需要使用 sudo 來獲得權限。[參考連結](https://yhtechnote.com/linux-sudo/)

9.  **Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？**
Nginx 的日誌檔案通常位於 /var/log/nginx/ 下，其中 access.log 記錄了所有的訪問請求，error.log 記錄了錯誤資訊。[參考連結](https://developer.aliyun.com/article/1181842)

10. **其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」**
無。

11. **列出完成本作業時參考的資料**
參考資料皆標記在每題的後方。
