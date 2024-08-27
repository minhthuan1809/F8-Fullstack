/*
1. localStorage
- Dung lượng lưu trữ lớn : 10mb
- chỉ lưu trữ texts
- thời gian lưu trữ không giới hạn
- server không thế can thiệp
- dễ bị tấn công xss
- phân biệt theo origin : scheme + hosname + post
code : 
localStorage.getItem(key)
localStorage.setItem(key,value)
localStorage.remove(key)
localStorage.clear()



2 . sessionStorage
- Dung lượng lưu trữ lớn : 10mb
- chỉ lưu trữ texts
- thời gian lưu trữ theo phiên (Tắt trình duyệt lá mất)
- server không thế can thiệp
- dễ bị tấn công xss
- phân biệt theo origin

code : 
sessionStorage.getItem(key)
sessionStorage.setItem(key,value)
sessionStorage.remove(key)
sessionStorage.clear()



3. cookie
- dung lương lưu trữ thấp (4kb)
- chia sẻ dữ liệu tới các subdomain
- chỉ lưu trữ texts
- phân biệt theo  path
- Sever Có thể đọc được cookie và set cookie
- có chế độ bảo mật : 
+ httpOnly
+ Secures
- dễ bị tấn công CSRF
- quy định được thời gian lưu trữ 
+ mặc định là session cookie
+ Pesistent cookie
 
Cấu tạo của cookie

key= value;path=duong-dan;expires|max-age=thoi-han;domain=tenmien;httpOnly

code: 
*/
