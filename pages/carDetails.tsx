import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Definir uma interface para o carro, ajustando conforme os dados reais do projeto
interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
  imageUrl: string;
}

const CarDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Pega o ID do carro dos parâmetros da URL

  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    // Função para buscar o carro por ID; ajuste para o real endpoint do projeto
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`/api/cars/${id}`);
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do carro:", error);
      }
    };

    if (id) fetchCarDetails();
  }, [id]);

  if (!car) return <p className="text-center mt-10">Carregando detalhes do carro...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{car.make} {car.model}</h1>
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-80 object-cover rounded-md mb-6" />
      
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">Ano: {car.year}</p>
        <p className="text-gray-600">Preço: R$ {car.price.toLocaleString('pt-BR')}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
      <p className="text-gray-700">{car.description}</p>

      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Voltar
      </button>
    </div>
  );
};

export default CarDetails;
