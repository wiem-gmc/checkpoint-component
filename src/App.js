import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FullName/>
        <Address/>
        <ProfilPhoto/>
      </header>
    </div>
  );
}

export default App;
