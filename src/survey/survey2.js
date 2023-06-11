import './survey.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



function survey2() {
  return (
    <div className="survey">
      <h1>¿Que edad tienes?</h1>
      <div className='bt-survey'>
        <Button variant="contained">Entre 7 - 8 años</Button>
        <Button variant="contained">Entre 8 - 10 años</Button>
        <Button variant="contained">Entre 10 - 12 años</Button>
      </div>
      <Link to="/survey3"><button className='bt-next'>
        Siguiente
      </button></Link>
    </div>
  );
}

export default survey2;
