# Ví dụ hướng dẫn học viên lớp Node.js bắt tay vào nghề
Một số mã nguồn lớp thực tập sẽ được chia sẻ miễn phí [Full stack Node.js 2017](https://techmaster.vn/khoa-hoc/25544/full-stack-nodejs-2017)

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
## Cần chú ý điểm gì

### Luôn viết unit test kiểm thử hàm logic
Tham khảo [Testing Node.js With Mocha and Chai](http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WJmsLxJ96EI)
Một giờ tiếc rẻ không viết hàm kiểm thử sẽ trả giá bằng 20-100 giờ ngồi fix bug.

![](http://flylib.com/books/4/223/1/html/2/images/0672327988/graphics/01fig02.gif)

### Kiểm thử xem error được ném ra trong một function
Cần gói hàm đó trong một anonymous function.
Chỉ cần kiểm tra error message là được
```javascript
(() => {
      function_that_throw_error
    }).should.throw('Error message');
```

### export constant
```javascript
const pound_to_kg = 0.45359237;
exports.pound_to_kg = pound_to_kg;

```

### export hàm chuẩn ES 6
```javascript
exports.function_name = (params) => {
  
}
```
## Bài tập nâng cao
- Bài 1: Hãy trang trí giao diện nhập dữ liệu đẹp như thế này. Tham khảo module [readline-sync](https://github.com/anseki/readline-sync)

![demo](https://github.com/anseki/readline-sync/raw/master/screen_01.png)

- Bài 2: Viết hàm giải phương trình bậc 2, sau đó sử dụng module [plot.ly](https://plot.ly/) để vẽ đồ thị hàm bậc 2

![Đồ thị hàm bậc 2](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Polynomialdeg2.svg/220px-Polynomialdeg2.svg.png)


