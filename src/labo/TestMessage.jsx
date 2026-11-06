import { useState } from 'react';

export default function TestMessage() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Test : Saisie de message</h3>
      <input 
        type="text" 
        placeholder="Tapez quelque chose..." 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <p>Vous avez écrit : {message}</p>
    </div>
  );
}