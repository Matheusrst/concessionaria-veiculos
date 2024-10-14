const topSellingCars = [
    { name: "Volkswagen Gol", img: "/images/gol.png" },
    { name: "Volkswagen Fox", img: "/images/fox.png" },
    { name: "Chevrolet Onix", img: "/images/onix.png" },
    { name: "Hyundai HB20", img: "/images/hb20.png" },
    { name: "Ford Ecosport", img: "/images/ecosport.png" },
  ];
  
  const TopSellingCars = () => {
    return (
      <div className="top-selling-cars">
        {topSellingCars.map((car, index) => (
          <div key={index} className="car-item">
            <img src={car.img} alt={car.name} />
            <p>{car.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TopSellingCars;
  