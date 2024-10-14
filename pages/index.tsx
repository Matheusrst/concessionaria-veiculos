import { useState, useEffect } from "react";
import Link from "next/link";

interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
}

export default function Home() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    // Simulação de busca de dados
    const veiculosFicticios: Veiculo[] = [
            { id: 1, marca: "Fiat", modelo: "Palio", ano: 2015, preco: 400000 },
            { id: 2, marca: "Volkswagen", modelo: "Gol", ano: 2020, preco: 60000 },
        ];
        setVeiculos(veiculosFicticios);
      }, []);
    
      return (
        <div>
          <h1>Lista de Veículos</h1>
          <Link href="/veiculos/novo">Adicionar Veículo</Link>
          <ul>
            {veiculos.map((veiculo) => (
              <li key={veiculo.id}>
                {veiculo.marca} {veiculo.modelo} - R$ {veiculo.preco}{" "}
                <Link href={`/veiculos/${veiculo.id}`}>Editar</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }