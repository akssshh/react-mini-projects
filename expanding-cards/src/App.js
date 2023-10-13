import './App.css';
import { useState } from 'react';

function App() {

  const [active, setActive] = useState(null)

  const imageUrl1 = 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  const imageUrl2 = 'https://images.unsplash.com/photo-1556187390-a3291e167483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';

  const imageUrl3 = 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80';

  const imageUrl4 = 'https://plus.unsplash.com/premium_photo-1661886323367-fc6579695eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  const imageUrl5 = 'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';

  const panelClick = (imageUrl) => {
    setActive(imageUrl);
  }

  return (
   <>
   <div className="container">
     <div className= {`panel ${active === imageUrl1 ? 'active' : ''}`}  style={{ backgroundImage: `url(${imageUrl1})` }} onClick={() => panelClick(imageUrl1)} >
        <h3>London</h3>
      </div>
      <div className={`panel ${active === imageUrl2 ? 'active' : ''}`} style={{ backgroundImage: `url(${imageUrl2})`}} onClick={() => panelClick(imageUrl2)} >
        <h3>switzerland</h3>
      </div>
      <div className={`panel ${active === imageUrl3 ? 'active' : ''}`} style={{ backgroundImage: `url(${imageUrl3})`}} onClick={() => panelClick(imageUrl3)} >
        <h3>Japan</h3>
      </div>
      <div className={`panel ${active === imageUrl4 ? 'active' : ''}`} style={{ backgroundImage: `url(${imageUrl4})`}} onClick={() => panelClick(imageUrl4)} >
        <h3>South Korea</h3>
      </div>
      <div className={`panel ${active === imageUrl5 ? 'active' : ''}`} style={{ backgroundImage: `url(${imageUrl5})`}} onClick={() => panelClick(imageUrl5)} >
        <h3>New York</h3>
      </div>

    </div>
   </>
  );
}

export default App;
