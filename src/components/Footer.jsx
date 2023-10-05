import logoIcon from "../assets/logo-white.png";
import "../components/components.css";

export function Footer() {
  return (
    <div className='w-full flex justify-center items-center py-10 bg-color1'>
      <LogoFooter />
    </div>
  );
}

function LogoFooter() {
  return <img src={logoIcon} alt='logo from footer' width={150} />;
}
