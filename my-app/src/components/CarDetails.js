import { useEffect, useRef } from "react";

export function CarDetails() {
  const initialData = {
    model: "Fiat",
    year: 2002,
    color: "#de1212",
  };

  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();
  const formRef = useRef()

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      model: modelRef.current.value,
      year: yearRef.current.value,
      color: colorRef.current.value,
    };
    formRef.current.reset()

    console.log(data);
  }

  useEffect(() => {
      
  })

  return (
    <form ref={formRef}>
      <label>
        Model: &nbsp;
        <input
          name="model"
          type="text"
          ref={modelRef}
          defaultValue={initialData.model}
        />
      </label>
      <label>
        Year: &nbsp;
        <input
          name="year"
          type="number"
          min="1900"
          max="2099"
          ref={yearRef}
          defaultValue={initialData.year}
        />
      </label>
      <label>
        Color: &nbsp;
        <input
          name="color"
          type="color"
          ref={colorRef}
          defaultValue={initialData.color}
        />
      </label>
      <button onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
