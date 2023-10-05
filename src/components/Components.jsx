import "./components.css"

export function Button({text}) {
return (
  <button
    className='w-full py-1 text-white text-lg font-semibold rounded-lg bg-color1 shadow-lgt'
  >
    {text}
  </button>
);
}

