import './App.css';
import TimeLine from './components/timeline/Timeline.jsx';
import Header from './components/header/Header.jsx';
import Tables from './components/tables/Tables.jsx';

function App() {
  return (
    <div className='App'>
      <Header/>
      <TimeLine/>
      <Tables/>
    </div>
  )

}
export default App;
