const brands = [
    "/icons/honda.png",
    "/icons/volkswagen.png",
    "/icons/ford.png",
    "/icons/chevrolet.png",
    "/icons/fiat.png",
    "/icons/nissan.png",
    "/icons/toyota.png",
  ];
  
  const BrandCarousel = () => {
    return (
      <div className="brand-carousel">
        {brands.map((brand, index) => (
          <img key={index} src={brand} alt={`Brand ${index + 1}`} />
        ))}
      </div>
    );
  };
  
  export default BrandCarousel;
  