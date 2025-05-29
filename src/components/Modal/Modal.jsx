import "./Modal.css";
import {useState} from "react";
import {getImageProjectUrl} from "../../utils/image_utils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Modal = ({open, onClose, setImageUrl, image}) => {
  if (!open) return null;

  const arrayImages = [
    "nikhil.jpg",
    "the-5th.jpg",
    "true-agency.jpg"
  ];

  const index = arrayImages.indexOf(image);
  const [slideNumber, setSlideNumber] = useState(index);

  const prevSlide = (e) => {
    e.stopPropagation();
    setImageUrl(getImageProjectUrl(arrayImages[slideNumber]));
    slideNumber === 0 ? setSlideNumber(arrayImages.length - 1) : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setImageUrl(getImageProjectUrl(arrayImages[slideNumber]));
    slideNumber === arrayImages.length - 1 ? setSlideNumber(0) : setSlideNumber(slideNumber +1);
  };

  return (
    <div onClick={onClose} className="modal-overlay">
      < FaChevronLeft className="chevron-left" onClick={prevSlide}/>
      < FaChevronRight className="chevron-right" onClick={nextSlide}/>
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <div onClick={nextSlide} className="modal-item">
          <img src={getImageProjectUrl(arrayImages[slideNumber])} alt='image' />
        </div>
      </div>
    </div>
  );
}

export default Modal;