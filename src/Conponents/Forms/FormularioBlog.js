import React from "react";

const FormularioBlog = (props) => {
  // const {onChangeForm}=props
  return (
    <div>
      <form action="">
        <input type="text" name="Url" onChange={props.onChangeForm} />
        <br />
        <input type="text" name="Post" onChange={props.onChangeForm} />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
export default FormularioBlog;
