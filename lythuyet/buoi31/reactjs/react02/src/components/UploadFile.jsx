import { useEffect, useState } from "react";

export default function UploadFile() {
  const [image, getImage] = useState({});
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    getImage({ ...image, previewUrl });
    console.log("file:", file);
  };
  const handleUploadFile = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", file.file);

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload/",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        alert("upload file false");
      }

      const data = await response.json();
      getImage({ ...image, previewUrl: data.location });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.previewUrl);
    };
  }, [image]);
  return (
    <div>
      <form action="" onSubmit={handleUploadFile}>
        <input type="file" name="image" onChange={handleChangeFile} />
        <button type="submit">upload</button>
      </form>
      {image.previewUrl && (
        <img src={image.previewUrl} style={{ width: "300px" }} />
      )}
    </div>
  );
}

/*
yêu cầu : 
- Chọn ảnh thì hiện thị xem trước
- Bấm upload ==> Tải lên Server
- Hiện thị ảnh đã upload, thay thế vị trí ảnh xem trước thông báo 
Lưu ý : có loading
*/
