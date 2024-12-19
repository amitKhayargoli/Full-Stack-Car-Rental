import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LodeX from "./LodeX";
import Login from "./Login";
function App(){
  
  return <BrowserRouter>
  <Routes>
    <Route index element= {<LodeX/>}/>
    <Route path='/Login' element={<Login/>}/>

  </Routes>

  </BrowserRouter>
}
export default App;