import { useState } from 'react'
import './App.css'
import TestCouleur from './labo/TestCouleur'
import TestMessage from './labo/TestMessage'

function App() {
  const [compteur, setCompteur] = useState(0)
  
  // On ajoute un état pour gérer le menu de notre labo
  const [testActif, setTestActif] = useState('couleur')

  return (
    <div>
      {/* --- TON CODE EXISTANT (Le Compteur) --- */}
      <h1>Mon premier composant React</h1>
      <p>Valeur actuelle : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>
        Clique-moi !
      </button>

      {/* --- LA NOUVELLE SECTION (Le Laboratoire) --- */}
      <hr style={{ margin: '40px 0' }} />
      
      <h2>🧪 Mon Laboratoire de Tests</h2>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setTestActif('couleur')}>Test Couleur</button>
        <button onClick={() => setTestActif('message')}>Test Message</button>
      </nav>

      <div>
        {testActif === 'couleur' && <TestCouleur />}
        {testActif === 'message' && <TestMessage />}
      </div>
      
    </div>
  )
}

export default App