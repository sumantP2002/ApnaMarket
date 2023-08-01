import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-2540,msid-101532597/bombay-dyeing-.jpg"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://en.wikipedia-on-ipfs.org/I/Havells_Logo.svg.png.webp"
            style={{width:"150px" ,objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://w7.pngwing.com/pngs/748/714/png-transparent-nestle-logo-thumbnail.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://t0.gstatic.com/images?q=tbn:ANd9GcQT0ObGlbLENCprnkCMUL_3OoQPBJ2qDEUyKWeaMUdtJqzzKbEr"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://etimg.etb2bimg.com/photo/68610404.cms"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
