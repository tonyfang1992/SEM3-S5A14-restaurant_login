# 餐廳清單

#### 使用者登入帳號可以建立屬於自己餐廳清單，可以新增、修改、刪除餐廳清單，排序功能

## Installing

#### 環境

1.  node.js v-10.15.0

2.  專案套件
    > - bcryptj: ^2.4.3
    > - body-parser: ^1.19.0
    > - connect-flash: ^0.1.1
    > - dotenv: ^8.2.0
    > - express: ^4.17.1
    > - express-handlebars: ^3.1.0
    > - express-session: ^1.17.0
    > - express-validator: ^6.2.0
    > - method-override: ^3.0.0
    > - mongoose: ^5.7.12
    > - passport: ^0.4.0
    > - passport-facebook: ^3.0.0"
    > - passport-github: ^1.1.0
    > - passport-local: ^1.0.0

#### 確認本機是否安裝 [Mongodb](https://www.mongodb.com/download-center/community) 、 [Robo 3T](https://robomongo.org/)

#### 開啟終端機到存放專案本機位置並執行:

> git clone https://github.com/Wendy03/SEM3-S5A14-restaurant_login.git

#### 初始

```

1.切換目錄到專案: cd SEM3-S5A14-restaurant_login
2.安裝套件: npm install
3.新增種子資料
- cd ~ models\seeds
- node restaurantSeeder.js
- 確認 Robo 3T 資料已經建立了

```

#### 專案的「根目錄」新增 .env 這個檔案

> #### [Facebook developers](https://developers.facebook.com/)、 [GitHub developers](https://github.com/settings/developers) 創建應用程式取得 client ID ' client secret

```
FACEBOOK_ID= //your Client ID
FACEBOOK_SECRET= //your Client secret
FACEBOOK_CALLBACK= http://localhost:3000/auth/facebook/callback

GITHUB_ID= //your Client ID
GITHUB_SECRET= //your Client secret
GITHUB_CALLBACK= http://127.0.0.1:3000/auth/github/callback
```

#### 執行程式

```

1. 終端機輸入: nodemon run dev
2. 開啟網頁輸入: http://localhost:3000/users/login

```

## 主要功能

##### 1. 使用者填寫名子、Email、Password 註冊帳號

##### 2. 使用者註冊成功後以 Email、Password 登入餐廳清單

##### 3. 使用者登入成功後可以新增一家餐廳

##### 4. 使用者登入成功後可以瀏覽一家餐廳的詳細資訊

##### 5. 使用者登入成功後可以瀏覽全部所有餐廳

##### 6. 使用者登入成功後可以修改一家餐廳的資訊

##### 7. 可使用者登入成功後以刪除一家餐廳

##### 8 使用者登入成功後可以設定店名、類別、地區、評分排序

## 測試帳號

| Name  | Email             | Password |
| ----- | ----------------- | -------- |
| user1 | user1@example.com | 12345678 |
| user2 | user2@example.com | 12345678 |

## 截圖

###### 1.登入

![image](https://github.com/Wendy03/SEM3-S5A14-restaurant_login/blob/master/public/img/login.PNG)

###### 2.註冊

![image](https://github.com/Wendy03/SEM3-S5A14-restaurant_login/blob/master/public/img/signup.PNG)

###### 3.個人頁面

![image](https://github.com/Wendy03/SEM3-S5A14-restaurant_login/blob/master/public/img/userpage.PNG)

#### 其他

###### 以 GitHub 登入要確定[Public profile](https://github.com/settings/profile) 的 Public email 要有資料

![image](https://github.com/Wendy03/SEM3-S5A14-restaurant_login/blob/master/public/img/githubemail.PNG)
