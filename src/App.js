import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

/*Offline*/
import Home from './Não Logado/Home_deslogado/Home_deslogado.jsx'
import Login from './Não Logado/Login_Cadastro/Login.jsx'
import Cadastro from './Não Logado/Login_Cadastro/Cadastro.jsx'

/*Online*/
import Home_Logado from './Não Logado/Home_logado/Home_logado.jsx'
import Cesta from './Não Logado/Cesta/Cesta.jsx'
import Pagamento from './Não Logado/Cesta/Pagamento/Pagamento.jsx'
  import Boleto from './Não Logado/Cesta/Pagamento/Modos/Boleto.jsx'
  import Cartão from './Não Logado/Cesta/Pagamento/Modos/Cartão.jsx'
  import Pix from './Não Logado/Cesta/Pagamento/Modos/Pix.jsx'

/*Segmentos e produtos*/

import Segmento1 from './Não Logado/Mercadorias/Segmentos/Segmento1.jsx'
  import Produto1 from './Não Logado/Mercadorias/Produtos/Produto1.jsx'
  import Produto2 from './Não Logado/Mercadorias/Produtos/Produto2.jsx'
  import Produto3 from './Não Logado/Mercadorias/Produtos/Produto3.jsx'
  import Produto4 from './Não Logado/Mercadorias/Produtos/Produto4.jsx'




function App() {
  return (
    <div>

      <Router>

        <Routes>

          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Home" element={<Home />}/>
          <Route exact path="/Login" element= {<Login />}/>
          <Route exact path="/Cadastro" element={<Cadastro />} />

          <Route exact path="/Login/Home" element={<Home_Logado />}/>
          <Route exact path="/Login/cesta" element={<Cesta />}/>
          <Route exact path="/Login/Cesta/Pagamento" element={<Pagamento />}/>

            <Route exact path="/Login/Cesta/Pagamento/boleto" element={<Boleto />}/>
            <Route exact path="/Login/Cesta/Pagamento/pix" element={<Pix />}/>
            <Route exact path="/Login/Cesta/Pagamento/cartao" element={<Cartão />}/>

          

          <Route exact path="/Login/Segmento1" element={<Segmento1 />}/>
          <Route exact path="/Login/Segmento1/Item1" element={<Produto1 />}/>
          <Route exact path="/Login/Segmento1/Item2" element={<Produto2 />}/>
          <Route exact path="/Login/Segmento1/Item3" element={<Produto3 />}/>
          <Route exact path="/Login/Segmento1/Item4" element={<Produto4 />}/>
          

        </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
