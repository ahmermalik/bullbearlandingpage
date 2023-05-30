import React,{useState} from 'react';

type NavbarProps = {
  items: string[];
};

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [nav, setNav] = useState('home');
  return (
    <nav>
      <div>
        {items.map((item, index) => (
          <a key={index} onClick={()=>setNav(item)}>{' '}{item}{' '}</a>
        ))}
      </div>
      current view you're seeing is {nav}
    </nav>
  );
};

export default Navbar;
