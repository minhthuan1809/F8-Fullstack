# package

- cài đặt thử công
- Cập nhập thử công
- Gỡ bỏ thử công (Quên gỡ thư viện)
- Di chuyển ==> Nặng
- Xung đột thư viện

  ==> giải pháp : công cụ quản lý thư viện

- Thao tác thông qua giao diện dòng lệnh (CLI = Commandlinne Interface)
- Thư viện sẽ dc lưu trữ trong store

## các công cụ

- Node Package Manager (NPM)
- Yarn

Lưu ý : khi cài thư viện ==> sinh ra folder node_module

## khởi tạo dự án

- sử dụng npm init -y ==> Tạo ra fie package.json

## cài đặt tất cả dependencies

npm i hoặc npm install

## cài đặt 1 package

npm i ten_package hoặc npm install ten_package

## cài đặt nhiều package

npm i package1 package2 package3

## gỡ bỏ dependencies

npm uninstall ten_package

## các loại dependencies

- simple dependencies ==> npm i ten_package
- dev dependencies ==> npm i ten_package --save-dev

## chỉ cái đặt dependencies phục vụ production

npm i --product

## các loại cài đặt package

- local : npm i ten_package
  -global : npm i ten_package -g

  npm root -g ==> kiểm tra đường dẫn chứa các dependencies chưa global
  npm list -g ==> liệt kê các dependencies được cài đặt global

## phiên bản

major.minor.patch
khi chạy lệnh update của npm ==> chỉ update minor và patch

## cập nhật phiên bản

npm update ten_pack
npm update ==> cấp nhật tất cả package

## cài đặt dependencies theo phiên bản

npm i ten_package@phien_ban hoặc npm install ten_package@phienban

##
