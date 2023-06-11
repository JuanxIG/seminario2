import './survey.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



function survey1() {
  return (
    <div className="survey">
      <h1>¿Que materia/s te gusta/n?</h1>
      <div className='bt-survey'>
        <Button variant="contained">Matematica</Button>
        <Button variant="contained">Ciencias Naturales</Button>
        <Button variant="contained">Ciencias Sociales</Button>
        <Button variant="contained">Lengua</Button>
        <Button variant="contained">Ingles</Button>
        <Button variant="contained">Arte</Button>
      </div>
      
      <Link to="/survey2"><button className='bt-next'>
        Siguiente
      </button></Link>
    </div>
  );
}

export default survey1;
