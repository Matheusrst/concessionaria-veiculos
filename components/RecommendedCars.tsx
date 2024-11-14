import Link from 'next/link';

const recommendedCars = [
  { id: 1, name: "Honda Civic", price: "R$ 108.900", img: "/images/civic.png" },
  { id: 2, name: "Toyota Corolla", price: "R$ 198.900", img: "/images/corolla.png" },
  { id: 3, name: "Volkswagen Jetta", price: "R$ 228.490", img: "/images/jetta.png" },
  { id: 4, name: "BYD King", price: "R$ 187.800", img: "/images/byd.png" },
  { id: 5, name: "Audi A5", price: "R$ 359.990", img: "/images/audi.png" },
];

const RecommendedCars = () => {
  return (
    <div className="recommended-cars grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {recommendedCars.map((car) => (
        <div key={car.id} className="border p-4 rounded-md shadow-sm">
          <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded mb-4" />
          <div className="car-info text-center">
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <p className="text-gray-600 mb-2">{car.price}</p>
            <Link href={`/carDetails?id=${car.id}`}>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
