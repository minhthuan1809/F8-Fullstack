# regular expression (regex)

-- biểu thức chính quy

- Biểu thức để sử lsy chỗi nâng cao

* so khớp
* cắt cuỗi
* Thay thế

khi làm vc với biểu thức chính quy, xây dựng lên 1 pattern

cấu tạo cảu pattern
/regex/modifier

website test biểu thức chính quy

- https://regex101.com/

## các kí hiệu cơ bản

- string ==> So khớp chuỗi string có nằm trong chuỗi cần kiểm tra không ?

- ^ (đặt ở đầu biểu thức, sau dấu phân cách / )=> kiểm tra biểu thức nằm ở đầu chuỗi
- $ (đặt ở cuối biểu thức trước dấu phân cách /) ==> kiểm tra biểu thức nằm ở cuối chuỗi
- [min-max] ==> kt các kí tự từ min đến max (a-z,A-Z, 0-9)
- [char_list] == > kt các ký tự ([abc])

* lưu ý :

- cách biểu thức trong [], kết hợp vói nhau theo điều kiện hoạc
- nếu các biểu thức không nằm trong cùng cặp ngoặc [] ==> kết hợp với nhau theo điền kiện AND và đúng thứ tự

- {min,} => độ dài của biểu thức >= min
- {value} => độ dài của biểu thức = value
- {min,max} = > độ dài của biểu thức từ min đến max

ký hiệu viêt tắt cả độ dài

```
+ ==> thương ứng với {1,}
* ==> thương ứng với {0,}
? ==> thương ứng với {0,1}
conslog()
```
