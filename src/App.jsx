import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LodeX from "./LodeX";
function App(){
  
  return <BrowserRouter>
  <Routes>
    <Route index element= {<LodeX/>}>

    </Route>
  </Routes>

  </BrowserRouter>
}
export default App;