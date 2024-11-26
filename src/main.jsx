
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cursor from './Components/Cursor.jsx'

export default function Main (){
{/* <div className='w-10 h-10 bg-gray-50'></div> */}
  return (
    <div>
      <Cursor />
      <App />
    </div>
  );
}
createRoot(document.getElementById('root')).render(

    <Main />
 
)
