import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // ✅ Updated Caption Styles
  const captionStyle = {
    position: "absolute",
    top: "30%", // Center text vertically
    left: "50%", // Center text horizontally
    transform: "translate(-50%, -50%)", // Ensures perfect centering
  //  background: "rgba(0, 0, 0, 0.6)", // Darker background for better visibility
    padding: "10px 20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    width: "60%", // Prevents covering the whole image
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
          alt="First slide"
        />
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>First slide label</h3>
            <p>Beautiful nature and water scenery.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/toys-collection-isolated-background_488220-2432.jpg?semt=ais_hybrid"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>Second slide label</h3>
            <p>Stunning city skyline at night.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://info.ehl.edu/hubfs/1440/1440x960-spices.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>Third slide label</h3>
            <p>Peaceful mountain view at sunset.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fortheloveofnature.in/cdn/shop/products/Mangiferaindica-Priyur_Mango_1.jpg?v=1640246617"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>Fourth slide label</h3>
            <p>Fresh mangoes from nature.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
