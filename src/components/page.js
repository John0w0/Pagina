import React from 'react'
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function page() {
  return (
    <div>
    <header>
      <h1>Conciencia sobre el Cambio Climático</h1>
      <nav>
    <button type="button" class="btn btn-outline-success"><a href="#causas">Causas</a></button>
    <button type="button" class="btn btn-outline-success"><a href="#efectos">Efectos</a></button>
    <button type="button" class="btn btn-outline-success"><a href="#acciones">Qué puedes hacer</a></button>
    </nav>
    </header>

    <main>
      <section id="introduccion">
        <h2>¿Por qué es importante?</h2>
        <p>El cambio climático es uno de los mayores desafíos de nuestro tiempo. Afecta a los ecosistemas, la biodiversidad y nuestras vidas diarias.</p>
      </section>

      <section id="causas">
        <h2>Causas del Cambio Climático</h2>
        <ul>
          <li>Quema de combustibles fósiles.</li>
          <li>Deforestación.</li>
          <li>Agricultura intensiva.</li>
        </ul>
      </section>

      <section id="efectos">
        <h2>Efectos del Cambio Climático</h2>
        <p>Aquí tienes algunos de los impactos más graves:</p>
        <ul>
          <li>Aumento del nivel del mar.</li>
          <li>Fenómenos meteorológicos extremos.</li>
          <li>Pérdida de biodiversidad.</li>
        </ul>
      </section>

      <section id="acciones">
        <h2>Qué puedes hacer</h2>
        <p>¡Tú puedes marcar la diferencia! Aquí hay algunas acciones:</p>
        <ol>
          <li>Reducir, reutilizar y reciclar.</li>
          <li>Usar transporte sostenible.</li>
          <li>Consumir energía renovable.</li>
        </ol>
        
      </section>
    </main>

    <footer>
      <p>© 2024 Conciencia Climática | Diseñado con amor por bb</p>
    </footer>
  </div>
  )
}

export default page;