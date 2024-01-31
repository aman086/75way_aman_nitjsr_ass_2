import './App.css';
import Signup from './authentication/Signup';
import AudioPlayer from './components/audioplayer';
import ToggleButton from './toggle/toggleBackground';

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <ToggleButton >
        <AudioPlayer />
      </ToggleButton>

      {/* <Signup /> */}
      
    </div>
  );
}

export default App;


// tiwari75way
// 5QbqwS1zvWMG0d0N