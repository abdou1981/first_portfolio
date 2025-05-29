import "./SectionTitle.css";

const SectionTitle = ({ title, image, alt, className}) => {
  return (
    <div className={`section-title ${className}`}>
      <h1>{title}</h1>
      <img className = "avatar-image-section" src={image} alt= {alt} />
    </div>
  );
}

export default SectionTitle;