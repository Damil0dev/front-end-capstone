import logo from "../assets/725cbe0ca5da8536fc99c51e00d4d13628bd9745.png";

export function Header() {
  return (
    <div className='w-full flex justify-center items-center p-3 bg-slate-100'>
      <div className="absolute left-5 w-8">
        <HamburguerIcon />
      </div>
      <div className="w-40">
        <LogoHeader />
      </div>
    </div>
  );
}

function HamburguerIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      className='w-full cursor-pointer'
    >
      <path
        d='M4 6H20M4 12H20M4 18H20'
        stroke='#000000'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

function LogoHeader() {
  return <img src={logo} alt='Little Lemon logo' width={100} className="w-full" />;
}
