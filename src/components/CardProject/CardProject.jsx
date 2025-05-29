import "./CardProject.css";
import {useState} from "react";
import {getImageProjectUrl} from "../../utils/image_utils";
import {Modal} from "../index";

const CardProject = ({image, title, description, alt}) => {
  const [openModal, setOpenModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(getImageProjectUrl(image));

  const handleModal = () => {
    setImageUrl(getImageProjectUrl(image));
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div className="card-project">
      <Modal image= {image} setImageUrl = {setImageUrl} open= {openModal} onClose ={() => handleCloseModal()}/>
      <h3 className="card-project-title">{title}</h3>
      <h3 className="card-project-description">{description}</h3>
      <a onClick={() => handleModal()} className="card-project-link">
        <img src={getImageProjectUrl(image)} alt={alt} className="card-project-image" />
      </a>
    </div>
  );
}

export default CardProject;