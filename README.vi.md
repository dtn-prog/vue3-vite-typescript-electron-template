# Mẫu dự án Vue 3 + Vite + TypeScript + Electron

Dự án này là một boilerplate hiện đại để xây dựng ứng dụng desktop đa nền tảng với:
- **Vue 3** (giao diện frontend)
- **Vite** (công cụ build nhanh)
- **TypeScript** (kiểm tra kiểu dữ liệu)
- **Electron** (khung ứng dụng desktop)

## Tính năng
- ⚡️ Phát triển nóng tức thì với Vite
- 🖥️ Tích hợp Electron cho ứng dụng desktop
- 📝 Hỗ trợ TypeScript toàn diện
- 📦 Đóng gói dễ dàng cho Windows, macOS, Linux
- 🗂️ Pinia để quản lý trạng thái
- 🧪 Unit test với Vitest
- 🧹 Kiểm tra code với ESLint

## Cấu trúc thư mục
```
├── src/
│   ├── electron/      # Mã nguồn tiến trình chính Electron
│   └── ui/            # Mã nguồn frontend Vue 3
│       ├── assets/    # Tài nguyên tĩnh
│       ├── components/# Các component Vue
│       ├── stores/    # Pinia stores
│       └── main.ts    # Điểm vào frontend
├── dist-vue/          # Frontend đã build (sau khi build)
├── package.json       # Script & phụ thuộc dự án
├── vite.config.ts     # Cấu hình Vite
├── electron-builder.json # Cấu hình đóng gói Electron
```

## Bắt đầu

### 1. Cài đặt phụ thuộc
```bash
npm install
```

### 2. Chạy phát triển
Chạy đồng thời Vite dev server và Electron ở chế độ phát triển:
```bash
npm run dev
```

- Frontend chạy tại [http://localhost:5123](http://localhost:5123)
- Electron sẽ mở cửa sổ tải dev server

### 3. Build cho sản xuất
Build frontend Vue và biên dịch mã Electron:
```bash
npm run build
```

### 4. Đóng gói ứng dụng desktop
Tạo file cài đặt cho hệ điều hành của bạn:
- **Windows:**
  ```bash
  npm run dist:win
  ```
- **macOS:**
  ```bash
  npm run dist:mac
  ```
- **Linux:**
  ```bash
  npm run dist:linux
  ```

### 5. Kiểm tra code & test
- Kiểm tra code:
  ```bash
  npm run lint
  ```
- Chạy unit test:
  ```bash
  npm run test:unit
  ```

## Công nghệ sử dụng
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Electron](https://www.electronjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)

## Giấy phép
[MIT](LICENSE) 