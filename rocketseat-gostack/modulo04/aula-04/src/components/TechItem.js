import React from 'react';
function TechItem({ tech, handleDelete}){
  return (
    <li>
      {tech}
      <button onClick={() => handleDelete(tech)} type="button">Remover</button>
    </li>
  )
}

export default TechItem;