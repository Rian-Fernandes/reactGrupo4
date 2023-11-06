import React, { useState } from "react";
import styles from "./ImageCard.module.css"; // Certifique-se de importar seus estilos corretamente

function ImageCard() {
  const [image, setImage] = useState(null);
  const [imageTxt, setImageTxt] = useState("Choose an image");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgData = e.target.result;
        setImage(imgData);
      };

      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div>
      <label className={styles.picture} htmlFor="pictureinput" tabIndex="0">
        <span className={styles.pictureimage}>
          {image ? (
            <img src={image} alt="Selected" className="picture__img" />
          ) : (
            imageTxt
          )}
        </span>
      </label>

      <input
        className={styles.input}
        type="file"
        name="pictureinput"
        id="pictureinput"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ImageCard;
