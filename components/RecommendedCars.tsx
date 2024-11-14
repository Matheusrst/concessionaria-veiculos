import Link from 'next/link';
import Image from 'next/image';

// Importando imagens diretamente
import CivicImage from '../public/images/civic.png';
import CorollaImage from '../public/images/corolla.png';
import JettaImage from '../public/images/jetta.png';
import BydImage from '../public/images/byd.png';
import AudiA5Image from '../public/images/audi.png';

const recommendedCars = [
  { id: 1, name: "Honda Civic", price: "R$ 108.900", img: CivicImage },
  { id: 2, name: "Toyota Corolla", price: "R$ 198.900", img: CorollaImage },
  { id: 3, name: "Volkswagen Jetta", price: "R$ 228.490", img: JettaImage },
  { id: 4, name: "BYD King", price: "R$ 187.800", img: BydImage },
  { id: 5, name: "Audi A5", price: "R$ 359.990", img: AudiA5Image },
];

const RecommendedCars = () => {
  return (
    <div className="recommended-cars">
      {recommendedCars.map((car) => (
        <div key={car.id} className="recommended-car-item">
          <Image 
            src={car.img} 
            alt={car.name} 
            width={200} 
            height={120} 
            className="car-image" 
          />
          <div className="car-info">
            <h3 className="car-name">{car.name}</h3>
            <p className="car-price">{car.price}</p>
            <Link href={`/carDetails?id=${car.id}`}>
              <button className="view-more-button">
                Ver Mais
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedCars;
