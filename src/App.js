import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h1>RECOVERY</h1>
        </div>
      </header>
      <body className="App-body">
        <div className="card" id="card1">
          <p>
          Los desastres naturales pueden amenazar nuestro sentido de control y seguridad 
          y afectar muchos aspectos de nuestras vidas
          </p>
        </div>
        <div className="card" id="card2">
          <p>
          El estrés ocasionado por un desastre y que no se reconoce de forma adecuada
          puede afectar nuestra salud física y mental
          </p>
        </div>
        <div className="card" id="card3">
          <p>
            Entra al asistente para ayudarte a gestionar mejor las emociones asociadas a un desastre natural
          </p>
        </div>
        <a
            className="App-link"
            href="https://t.me/Rcvry_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir al Asistente
          </a>
          <div className="card" id="card4">
          <h3>
          Preparacion de las reacciones emocionales                   
          </h3>
          <p>
          No todo el mundo tendrá una reacción emocional negativa a
          a los desastres naturales.
          Aquellos que lo hagan reaccionaran en una manera muy particular.
          Algunas reacciones emocionales típicas pueden incluir:
          </p>
          <p>
          • Sueños recurrentes o pesadillas sobre el suceso. <br/>
          • Dificultad para concentrarse o recordar cosas. <br/>
          • Sensación de entumecimiento, retirado o desconectado. <br/>
          • Alteraciones en el comer y los patrones de sueño. <br/>
          • Tener momentos de enojo o irritabilidad intensa. <br/>
          • Síntomas físicos persistentes (es decir, dolores de cabeza, problemas digestivos,tensión muscular, etc.). <br/>
          • Ser sobre protector de la seguridad de su familia. <br/>
          • Evitar los recordatorios de los eventos violentos o de evacuación. <br/>
          • Ser lloroso o llorando sin razón aparente. <br/>
          </p>
          </div>
      </body>
    </div>
  );
}

export default App;
