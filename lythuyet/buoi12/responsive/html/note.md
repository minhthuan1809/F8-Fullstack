#resbonsive
-thiết kế web đáp ứng trên mọi thiết bị 
- dựa theo kích thước màn hình để thay đổi giao diện 
- sử dụng css thôn qua 1 cái at-rule @media (media Queries)

## Breakpoint 
-điểm dừng tỏa độ tại đó giao diện sẽ được thay đổi
- không cso breakpoint trong 1 dựa án
- chỉ có các breakpoind phổ biến

ví dụ:
-576px 
-768px 
-992px
-1200px
-1400px

## meta Viewport
- đảm bảo tỉ lệ của khung nhìn khi chuyển sang thiết bị có kích thước khác
## media Queris
```css 
@media all |screen| print and (min-width:giatri ) and (max-width: gia tri){
    selecter{
        code css
    }
} 
```

## trường phái responsive
1 desktop First: đi từ màn hình lớn nhất

```
<= 1399.98px
<= 1199.98px
<= 911.98px
<= 767.98px
<= 575.98px
```


2. mobile first: đi từ màn hình nhỏ nhất
```
>= 576px
>= 768px
>= 992px
>= 1200px
>= 1400px
```