import { FC } from 'react';
import Navbar from '../components/Navbar';  // Importe o componente Navbar
import styles from '../styles/historico.module.css';  // Importação do CSS para a página de Histórico

const Historico: FC = () => {
  return (
    <>
      {/* Adicionando o Navbar */}
      <Navbar />

      <div className={styles['historico-container']}>
        <div className={styles['historico-header']}>
          <h1>Histórico de Compras</h1>
        </div>

        <div className={styles['historico-list']}>
          <div className={styles['historico-item']}>
            <h3>Compra 1 - 20/10/2024</h3>
            <p>Carro: Honda Civic</p>
            <p>Preço: R$ 108.900</p>
            <p>Status: Finalizado</p>
          </div>

          <div className={styles['historico-item']}>
            <h3>Compra 2 - 18/09/2024</h3>
            <p>Carro: Toyota Corolla</p>
            <p>Preço: R$ 198.900</p>
            <p>Status: Finalizado</p>
          </div>

          {/* Adicione mais itens conforme necessário */}
        </div>
      </div>
    </>
  );
};

export default Historico;
