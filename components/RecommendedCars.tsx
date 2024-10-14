const recommendedCars = [
    { name: "Honda Civic", price: "R$ 108.900", img: "/images/civic.png" },
    { name: "Toyota Corolla", price: "R$ 198.900", img: "/images/corolla.png" },
    { name: "Volkswagen Jetta", price: "R$ 228.490", img: "/images/jetta.png" },
    { name: "BYD King", price: "R$ 187.800", img: "/images/byd.png" },
    { name: "Audi A5", price: "R$ 359.990", img: "/images/audi.png" },
  ];
  
  const RecommendedCars = () => {
    return (
      <div className="recommended-cars">
        {recommendedCars.map((car, index) => (
          <div key={index} className="recommended-car-item">
            <img src={car.img} alt={car.name} />
            <div className="car-info">
              <h3>{car.name}</h3>
              <p>{car.price}</p>
              <button>Ver Mais</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RecommendedCars;
  