import './App.css';
import Raashi from './components/Raashi';
import { data } from './config/data';

function App() {

  return (
    <div className='root'>
      <div className='MainApp'>
      <div className="App">
        <div className='AppContainer'>
          <div className='AppView'>
            <h3 className='groomDetails'>||ಶ್ರೀ||</h3>
            <h2 className='title'>VIVAHA GUNA HONDANIKE</h2>
            <div className='groomDetails'>
              <h4>Groom Raashi:    Meena</h4>
              <h4>Groom Nakshatra: Revathi</h4>
            </div>
            <div>
              <Raashi data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className='rootNote'>
      <div className='noteContainer'>
      <div><p>ವಿ ಸೂ: ಆಯತ ಚಿಹ್ನೆಯಲ್ಲಿ ನಮೂದಿಸಿದ ನಕ್ಷತ್ರಗಳ ವಧು-ವರರಿಗೆ 18 ಅಥವಾ 18 ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ಗುಣ ಬಂದರೂ ವಿವಾಹ ಅಶುಭ.
          ವಜ್ರ ಚಿಹ್ನೆಯಲ್ಲಿ ನಮೂದಿಸಿರುವ ಗುಣಗಳ 18 ಕ್ಕಿಂತ ಕಡಿಮೆಯಿದ್ದರೂ, ವಧೂ-ವರರೊಬ್ಬರ ನಕ್ಷತ್ರವು ಮಹಾನಕ್ಷತ್ರವಾದ್ದರಿಂದ ವಿವಾಹ ಶುಭ, ಸ್ತ್ರೀ ಪೂರ್ವ ನಕ್ಷತ್ರವಾಗಿದ್ದರೆ ವಿವಾಹ ಅಶುಭ.</p></div>
      </div>
      </div>
      
      </div>
    </div>

  );
}

export default App;
