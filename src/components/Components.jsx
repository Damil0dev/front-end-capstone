import "./components.css"

export function Button({text}) {
return (
  <button
    className='w-full py-1 text-white text-lg font-semibold rounded-lg bg-color1 shadow-lg hover:bg-color1-light'
  >
    {text}
  </button>
);
}

