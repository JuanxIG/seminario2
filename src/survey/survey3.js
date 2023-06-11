import './survey.css';
import Button from '@mui/material/Button';



function survey3() {
  return (
    <div className="survey">
      <h1>¿Como te gustaria aprender?</h1>
      <div className='bt-survey'>
        <Button variant="contained">Jugando</Button>
        <Button variant="contained">Leyendo</Button>
        <Button variant="contained">Viendo videos</Button>
        <Button variant="contained">Escribiendo</Button>
      </div>
      <button className='bt-next'>
        Siguiente
      </button>
    </div>
  );
}

export default survey3;
