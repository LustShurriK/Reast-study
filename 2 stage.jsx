import React, { useState } from 'react';
import Image from './Image';

const ImageEditor = ({ props, onSave }) => {
  const [imageProps, setImageProps] = useState(props);
  const [crop, setCrop] = useState({ x: 0, y: 0, w: 100, h: 100 });
  const [objects, setObjects] = useState([]);

  const handleSave = () => {
    onSave({ ...imageProps, crop, objects });
  };

  const handleAddArrow = (point, comment) => {
    setObjects([...objects, { point, type: 'arrow', comment }]);
  };

  return (
    <div>
      <Image src={imageProps.src} crop={crop} objects={objects} />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setCrop({ x: 10, y: 10, w: 80, h: 80 })}>Crop</button>
      <button onClick={() => handleAddArrow({ x: 50, y: 50 }, 'New Arrow')}>Add Arrow</button>
    </div>
  );
};

export default ImageEditor;