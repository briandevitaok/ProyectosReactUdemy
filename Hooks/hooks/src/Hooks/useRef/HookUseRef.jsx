import { useRef } from 'react';

export const HookUseRef = () => {
  const inputRef = useRef(null);


  const enfocarInput = () => {
    inputRef.current.select()
    console.log(inputRef.current)
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Escriba su nombre"
      />

      <button
      className='btn btn-primary mt-2'
      onClick={enfocarInput}
      >
        Hacer focus
      </button>
    </div>
  );
};
