import React from "react";
import { ImageCardProps } from "./types";
import './style.css'

const ImageCard: React.FC<ImageCardProps> = ({ link }) => {
  return (
    <div className="image-card-container">
      <img className="image-card" src={link} alt="Image Card" style={{ width: '95%', height:'auto'}} />
    </div>
  );
};

export default ImageCard;
