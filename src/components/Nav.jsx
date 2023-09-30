import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink 
      className={({ isActive, isPending }) => 
        isPending 
          ? "text-red-400" 
          : isActive 
            ? "border-b-4 border-yellow-300" 
            : ""
      } 
      to={to}
    >
      {children}
    </NavLink>
  );
};

const Nav = () => {
  const navItems = [
    { to: '/', name: 'Home' },
    { to: 'about', name: 'About' },
    { to: 'menu', name: 'Menu' },
    { to: 'booking-page', name: 'Booking Page' },
    { to: 'reservations', name: 'Reservations' },
    { to: 'order-online', name: 'Order Online' },
    { to: 'login', name: 'Login' },
  ];

  return (
    <nav className="h-16 w-full flex flex-row justify-between px-4 items-center gap-2">
      <div className="w-10 rounded-full flex justify-center items-center overflow-hidden">
        <img src="../../profile.jpg" alt="logo" />
      </div>
      <ul className=" justify-between items-center font-karla text-[16px] md:text-[16.5px] lg:text-[18px] gap-2 md:gap-6 inline-flex text-center">
        {navItems.map((item) => (
          <NavItem to={item.to} key={item.to}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;