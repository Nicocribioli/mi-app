import './App.css';
import Integrantes from "./componentes/integrantes.js"


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>NIRVANA</h1>
      <Integrantes 
      nombre="Kurt Cobain"
      rol="Lead singer and guitarist"
      texto="Kurt Donald Cobain (February 20, 1967 – c. April 5, 1994) was an American singer, songwriter and artist. He was the guitarist, lead vocalist and primary songwriter of the rock band Nirvana. Through his angst-fueled songwriting and anti-establishment persona, Cobain's compositions widened the thematic conventions of mainstream rock. He was heralded as a spokesman of Generation X and is considered one of the most influential musicians in the history of alternative rock."
      imagen="kurt"
      alt="Kurt Cobain picture"
      formato="jpeg" />
      <Integrantes 
      nombre="Krist Novoselic"
      rol="Bassist"
      texto="Krist Anthony Novoselic (born May 16, 1965) is an American musician and activist. He is best known as the bassist and co-founder of the rock band Nirvana. In 1987 Novoselic and Kurt Cobain formed the band Nirvana, along with drummer Aaron Burckhard whom they recruited. Through the late 80s Nirvana established themselves as part of the Seattle grunge scene and in 1989 they released their debut album Bleach."
      imagen="krist"
      alt="Krist Novoselic picture"
      formato="png" />
            <Integrantes 
      nombre="Dave Grohl"
      rol="Drummer"
      texto="David Eric Grohl (born January 14, 1969) is an American musician, songwriter and record producer. He is the founder of Foo Fighters, for whom he is the singer, guitarist, and primary songwriter. He was the drummer for Nirvana from 1990 to 1994. At 17, Grohl joined the punk rock band Scream after the departure of their drummer Kent Stax. He became the drummer for Nirvana after Scream broke up in 1990. Nirvana's second album, Nevermind (1991), was the first to feature Grohl on drums and became a worldwide success."
      imagen="dave"
      alt="Dave Grohl picture"
      formato="jpg" />
      </div>
    </div>
  );
}



export default App;
