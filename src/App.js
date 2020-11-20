import "./App.css";
import Title from "./Conponents/Title";
import React, { useState } from "react";
import FormularioBlog from "./Conponents/Forms/FormularioBlog";
import Print from "./Conponents/Print";

function App() {
  const [data, setData] = useState({
    Url: "",
    Post: "",
  });
  const onChangeForm = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((a) => ({
      ...a,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <Title />
      <FormularioBlog data={data} onChangeForm={onChangeForm} />
      <Print data={data} />
    </div>
  );
}

export default App;
