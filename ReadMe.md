# Chat Application (Node.js + Jade + PostgreSQL)

このプロジェクトは、Node.js・Jade(Pug)・PostgreSQL を使用して構築する
リアルタイムチャットアプリケーションです。  
Socket.IO によるリアルタイム通信、PostgreSQL によるメッセージ永続化を備えています。

---

## 📘 プロジェクト概要

### 🎯 目的
ユーザー同士がリアルタイムにメッセージを送受信できる Web チャットアプリを構築する。

### 🏗 使用技術
- Node.js (Express)
- Jade(Pug) — テンプレートエンジン
- PostgreSQL — 永続データストア
- Socket.IO — リアルタイム通信
- Sequelize / node-postgres(pg) — DBアクセス

---

## 🧱 アーキテクチャ
Browser
│ WebSocket / HTTP
▼
Node.js (Express)
│
├─ Jade(Pug)
├─ Socket.IO
└─ PostgreSQL



---

## 🗄 データベース設計

### users
| カラム | 型 | 説明 |
|-------|----|------|
| id | SERIAL PK | ユーザーID |
| username | VARCHAR(50) | 表示名 |
| email | VARCHAR(100) | メール |
| password_hash | VARCHAR(255) | パスワードハッシュ |
| created_at | TIMESTAMP | 登録日 |

### rooms
| カラム | 型 | 説明 |
|-------|----|------|
| id | SERIAL PK | ルームID |
| name | VARCHAR(100) | ルーム名 |
| created_at | TIMESTAMP | 作成日 |

### messages
| カラム | 型 | 説明 |
|-------|----|------|
| id | SERIAL PK | メッセージID |
| room_id | INT FK | ルームID |
| user_id | INT FK | 送信者 |
| content | TEXT | 本文 |
| created_at | TIMESTAMP | 送信日時 |

---

## 🔌 API 設計

### 認証
- POST /auth/register
- POST /auth/login
- GET /auth/logout

### チャット
- GET /rooms
- POST /rooms
- GET /rooms/:id/messages
- POST /rooms/:id/messages

---

## 🔁 Socket.IO イベント

| イベント名 | 説明 |
|------------|------|
| joinRoom | ルーム参加 |
| leaveRoom | ルーム退出 |
| sendMessage | メッセージ送信 |
| receiveMessage | メッセージ受信 |
| onlineUsers | オンラインユーザー更新 |

---

## 🎨 画面構成（Jade/Pug）

- login.pug  
- chat.pug  
- layout.pug  

---

## 🛠 開発ロードマップ

### Phase 1
- Express + Jade セットアップ
- PostgreSQL 接続
- 認証機能

### Phase 2
- Socket.IO 導入
- メッセージ送受信
- DB保存

### Phase 3
- UI整備（ルーム一覧・メッセージ表示）

### Phase 4
- 既読機能
- DM機能
- ファイル送信

---

## 📝 作成経緯

学生時代に Node.js のチュートリアルでチャットアプリを作成した経験があり、  
そのときは Jade(Pug) を使わず、メッセージの DB 保存も行っていなかった。

今回のプロジェクトでは、  
**「当時できなかった部分をすべて実装してみたい」**  
という目的で、Jade を使った画面構築や PostgreSQL による永続化に挑戦している。

---


