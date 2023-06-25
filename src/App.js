import Leaflet from "./Leaflet";
import FormUbicacion from "./Components/Formulario_ubicacion";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container my-5" >
      <div className="row border p-2 rounded">
        <div className="col-12 col-md-5 my-3">  
            <FormUbicacion />
        </div> 
        <div className="col-12 col-md-7 my-3">
            <Leaflet />
        </div>
      </div>
    </div>
  );
}

export default App;
