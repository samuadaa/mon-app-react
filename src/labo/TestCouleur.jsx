import { useState } from 'react';

export default function TestCouleur() {
  const [couleur, setCouleur] = useState("rouge");

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Test : Changement de couleur</h3>
      <p>La couleur actuelle est : <strong style={{ color: couleur }}>{couleur}</strong></p>
      <button onClick={() => setCouleur("bleu")}>Mettre en bleu</button>
      <button onClick={() => setCouleur("vert")}>Mettre en vert</button>
      <button onClick={() => setCouleur("rouge")}>Mettre en rouge</button>
    </div>
  );
}