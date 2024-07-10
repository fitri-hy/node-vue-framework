# Node-Vue Framework (EN)

Fullstack Framework with a backend using Node.js and a frontend using Vue.js running on one server combines the power of these two technologies to build modern and efficient web applications.

## Instalation

```
git clone https://github.com/fitri-hy/node-vue-framework.git
cd node-vue-framework
npm install
npm start
```

## Build

- Before building, you are required to add all the backend required dependencies into `dep-build.txt`
- Next Build: `npm run build`
- Build Project Settings: Open `dist/backend/.env` file and change to: `DIST_PATH=../` (_Frontend path adjustment_)

## Production

- Upload the dist folder and its contents to hosting (Node Server required)
- Atur `backend/server.js` sebagai file Node Server
- Project is ready

## Folder Structure

```
node-vue-framework/
│
├── backend/
│   ├── routes/
│   │   └── Api.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   │   └── logo.png
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   └── App.vue
│   │   ├── styles.css
│   │   └── index.js
│   ├── .bablerc
│   └── webpack.config.js
├── package-lock.json
├── package.json
└── README.json
```

<hr>
<hr>

# Node-Vue Framework (ID)

Fullstack Framework dengan backend menggunakan Node.js dan frontend menggunakan Vue.js yang berjalan di satu server menggabungkan kekuatan kedua teknologi ini untuk membangun aplikasi web yang modern dan efisien.

## Instalasi

```
git clone https://github.com/fitri-hy/node-vue-framework.git
cd node-vue-framework
npm install
npm start
```

## Membangun

- Sebelum membangun, Anda diharuskan menambahkan semua dependensi backend yang diperlukan ke `dep-build.txt`
- Lanjutkan Build: `npm run build`
- Bangun Pengaturan Proyek: Buka file `dist/backend/.env` dan ubah menjadi: `DIST_PATH=../` (_Penyesuaian jalur frontend)

## Produksi

- Upload folder `dist` beserta isinya ke hosting (Diperlukan Node Server)
- Tetapkan `backend/server.js` sebagai file Node Server
- Proyek sudah siap

## Struktur Folder

```
node-vue-framework/
│
├── backend/
│   ├── routes/
│   │   └── Api.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   │   └── logo.png
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   └── App.vue
│   │   ├── styles.css
│   │   └── index.js
│   ├── .bablerc
│   └── webpack.config.js
├── package-lock.json
├── package.json
└── README.json
```