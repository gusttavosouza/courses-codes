import React, { Fragment } from "react";
import { Card } from "../../components/card";


const List = ({ listaReceitas }) => (
  <Fragment>
    {listaReceitas.map(recipe => <Card key={recipe.id} {...recipe} />)}
  </Fragment>
);
export { List };
