import React from 'react';

const Image = ({ src, crop, objects }) => {
  return (
    <div style={{ position: 'relative', width: crop.w, height: crop.h, overflow: 'hidden' }}>
      <img src={src} alt="image" style={{ position: 'absolute', top: -crop.y, left: -crop.x }} />
      {objects.map((object, index) => {
        if (object.type === 'arrow') {
          return (
            <div key={index} style={{ position: 'absolute', top: object.point.y, left: object.point.x }}>
              <div style={{ width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid black' }} />
              <div style={{ position: 'absolute', top: 10, left: -30, whiteSpace: 'nowrap' }}>{object.comment}</div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Image;

const imageProps = {
    src: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    crop: { x: 10, y: 10, w: 80, h: 80 },
    objects: [
      { point: { x: 25, y: 25 }, type: "arrow", comment: "Hello my World!" },
      { point: { x: 55, y: 75 }, type: "arrow", comment: "It's woman." }
    ]
  };

  <Image {...imageProps} />;

  <ImageEditor props={imageProps} onSave={(newImageProps) => {
    console.log(newImageProps); 
  }} />;
  
  