# Đây là các ví dụ hướng dẫn học viên lớp Node.js bắt tay vào nghề

## Học lập trình Node.js cần những gì?

1. Hiểu rõ cú pháp JavaScript (thực ra rất lộn xộn), do đó càng phải học kỹ qua ví dụ

2. Hiểu cơ chế Asynchronous Function hay Callback function sau đó chuyển qua Promise (sử dụng BlueBird)

3. Nên chuyển sang dùng ES6 để viết code ngắn, ít lỗi hơn

4. Các JavaScript Patterns (module hóa, SOLID pattern, OOP)

5. Luôn viết Unit Test để verify lại code mình viết

Rồi sau đó chào mừng bạn đến với thế giới của Node.js

Tác giả: Trịnh Minh Cường (cuong@techmaster.vn)

## Ví dụ này demo hàm tính chỉ số BMI, Body Mass Index

1. Cách viết hàm trong JavaScript, sử dụng Arrow function chuẩn ES 6
2. Sử dụng mocha, chai, should để viết unit test
3. Muốn Unit test được thì function phải tách bạch ra, [separate concern](https://en.wikipedia.org/wiki/Separation_of_concerns)
4. Chia tách ứng dụng thành các file nhỏ, export và require

## Chạy thử ứng dụng

```bash
git clone https://github.com/TechMaster/basicjs.git
cd basicjs
npm install
npm test
node demo_bmi.js
```

## Bài tập nâng cao
1. Hãy trang trí giao diện nhập dữ liệu đẹp như thế này. Tham khảo module [readline-sync](https://github.com/anseki/readline-sync)
![demo](https://github.com/anseki/readline-sync/raw/master/screen_01.png)
2. Viết hàm giải phương trình bậc 2, sau đó sử dụng module [plot.ly](https://plot.ly/) để vẽ đồ thị hàm bậc 2
![Đồ thị hàm bậc 2](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Polynomialdeg2.svg/220px-Polynomialdeg2.svg.png)


