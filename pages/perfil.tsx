import { FC } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';  // Importe o componente Navbar
import styles from '../styles/perfil.module.css';  // Importação do CSS

const Perfil: FC = () => {
  return (
    <>
      {/* Adicionando o Navbar */}
      <Navbar />

      <div className={styles['profile-container']}>
        <div className={styles['profile-header']}>
          <h1>Meu Perfil</h1>
          <Link href="/">Voltar para a Página Inicial</Link>
        </div>

        <div className={styles['profile-info']}>
          <div className={styles['profile-image']}>
            <img src="/images/default-profile.png" alt="Imagem de Perfil" width={150} height={150} />
          </div>
          
          <div className={styles['profile-details']}>
            <h2>Nome do Usuário</h2>
            <p>Email: usuario@exemplo.com</p>
            <p>CPF: 123.456.789-00</p>
            <p>Data de Cadastro: 01/01/2023</p>
          </div>
        </div>

        <div className={styles['profile-actions']}>
          <button>Editar Perfil</button>
          <button>Alterar Senha</button>
        </div>
      </div>
    </>
  );
};

export default Perfil;
