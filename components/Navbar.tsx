import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Página Inicial</Link></li>
        <li><Link href="/categorias">Categorias</Link></li>
        <li><Link href="/marcas">Marcas</Link></li>
      </ul>
      <div className="profile-icon">
        <img src="/icons/profile.png" alt="Perfil" />
        <Link href="/perfil"></Link>
      </div>
    </nav>
  );
};

export default Navbar;
