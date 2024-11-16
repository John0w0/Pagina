import React from 'react'
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import imagen1 from "./img/ecosistema.jpg"
import imagen2 from "./img/sequias.jpg"
import imagen3 from "./img/inundaciones.jpg"
import imagen4 from "./img/agricola.jpg"
import imagen5 from "./img/contaminacion.jpg"
import imagen6 from "./img/efecto.jpg"
import imagen7 from "./img/calentamiento.jpg"
import imagen8 from "./img/biodiversidad.jpg"
import imagen9 from "./img/migracion.jpg"
import imagen10 from "./img/transporte.jpg"
import imagen11 from "./img/energia.jpg"

function page() {
  return (
    <div className='body'>
    <header>
      <h1>Conciencia sobre el Cambio Climático</h1>
      <nav>
    <button type="button" class="btn btn-outline-success"><a href="#causas">Causas</a></button>
    <button type="button" class="btn btn-outline-success"><a href="#efectos">Efectos</a></button>
    <button type="button" class="btn btn-outline-success"><a href="#acciones">Qué puedes hacer</a></button>
    </nav>
    </header>

    <main>
      <section className='seccion'>
        <h2>¿Por qué es importante?</h2>
        <p>El cambio climático es uno de los mayores desafíos que enfrenta la humanidad en el siglo XXI debido a sus efectos profundos y generalizados en el medio ambiente, las sociedades y las economías. Aquí te dejo algunas razones clave de por qué es tan importante:</p>
        <h3>Impacto en los ecosistemas y biodiversidad</h3>
        <p>El cambio climático está alterando hábitats naturales, lo que afecta a la flora y fauna. Muchas especies están siendo desplazadas o amenazadas con la extinción debido a cambios en el clima, la temperatura del océano y la pérdida de hábitats naturales. Esto reduce la biodiversidad y altera los ecosistemas, lo que puede tener consecuencias graves para los servicios que estos ecosistemas nos brindan, como la polinización de cultivos o la purificación del agua.</p>
        <img src={imagen1} ></img>
        <h3>Desastres naturales más frecuentes y graves</h3>
        <p>Las temperaturas más altas, las sequías prolongadas y las tormentas más intensas son algunas de las consecuencias directas del cambio climático. Esto puede generar más desastres naturales, como huracanes, incendios forestales e inundaciones, que pueden devastar comunidades y afectar la infraestructura.</p>
        <img src={imagen2} ></img>
        <h3>Aumento del nivel del mar</h3>
        <p>El derretimiento de los glaciares y la expansión térmica de los océanos provocan un aumento en el nivel del mar, lo que pone en riesgo a las zonas costeras y puede causar la pérdida de tierras habitables, especialmente en ciudades y países insulares.</p>
        <img src={imagen3} ></img>
        <h3>Impacto en la agricultura y la seguridad alimentaria</h3>
        <p>Cambios en el clima afectan los patrones de cultivo y pueden disminuir la productividad agrícola, lo que genera inseguridad alimentaria y puede afectar la economía de regiones dependientes de la agricultura.</p>
        <img src={imagen4} ></img>
        <h3>Amenazas a la salud humana</h3>
        <p>El cambio climático también tiene efectos directos en la salud, como el aumento de enfermedades respiratorias debido a la contaminación, el aumento de enfermedades transmitidas por vectores (como el dengue), y el estrés térmico extremo.</p>
        <img src={imagen5} ></img>
      </section>

      <section className='seccion' id='causas'>
        <h2>Causas del Cambio Climático</h2>
        <ol>
          <li><h4>Deforestación:</h4><p>La tala de bosques y la destrucción de áreas naturales para dar paso a la agricultura, la urbanización o la minería reduce la capacidad de los ecosistemas para absorber CO₂. Además, cuando los árboles se queman o se talan, liberan grandes cantidades de CO₂ almacenadas en su biomasa.</p></li>
          <li><h4>Contaminación industrial:</h4><p>Muchas industrias emiten gases y partículas contaminantes que contribuyen al calentamiento global. Algunos de estos gases, como los hidrofluorocarbonos (HFC), son potentes gases de efecto invernadero.</p></li>
          <li><h4>Emisiones de gases de efecto invernadero (GEI)</h4><p id='parrafo'><ul>
            
          <li><h4>Dióxido de carbono (CO₂):</h4><p>Es el principal gas de efecto invernadero que proviene de la quema de combustibles fósiles (como carbón, petróleo y gas) para la producción de energía, transporte e industrias. La deforestación también contribuye a la liberación de CO₂, ya que los árboles absorben este gas.</p></li>
          <li><h4>Metano (CH₄):</h4><p>Proviene de actividades como la agricultura (especialmente la ganadería, que produce grandes cantidades de metano debido a la digestión de los animales) y la descomposición de residuos orgánicos en vertederos.</p></li>
          <li><h4>Óxidos de nitrógeno (NOx):</h4><p>Estos gases provienen de la agricultura, especialmente del uso de fertilizantes, y de procesos industriales.</p></li>
            
          </ul></p></li>
          <li><h4>Procesos de urbanización:</h4><p>La expansión de las ciudades aumenta las emisiones de gases de efecto invernadero debido al uso de transporte, energía y materiales de construcción, que son fuentes de CO₂.</p></li>
        </ol>
        <img src={imagen6} ></img>
      </section>

      <section className='seccion' id='efectos'>
        <h2>Efectos del Cambio Climático</h2>
        <p>El cambio climático tiene una variedad de efectos, que van desde el aumento de las temperaturas hasta el impacto en los ecosistemas, la economía y la salud humana. Aquí te detallo algunos de los principales efectos:</p>
        
        <h3>1.Impacto en el clima global</h3><p>El cambio climático tiene un impacto profundo en el clima global, provocando un aumento generalizado de las temperaturas, lo que se traduce en veranos más calurosos e inviernos más cortos. Este calentamiento global altera los patrones climáticos, generando fenómenos meteorológicos más extremos, como olas de calor, tormentas más intensas, huracanes más fuertes e inundaciones frecuentes.</p>
        <img src={imagen7} ></img>

        <h3>2.Impacto en los ecosistemas y la biodiversidad</h3><p>El cambio climático está alterando los hábitats naturales, lo que pone en peligro a muchas especies. Los arrecifes de coral y otros ecosistemas marinos sufren por el calentamiento y la acidificación de los océanos, mientras que en tierra firme, muchas especies enfrentan la pérdida de su hogar o la extinción, desestabilizando los ecosistemas y reduciendo la biodiversidad.</p>
        <img src={imagen8} ></img>

        <h3>3.Conflictos sociales y migraciones</h3><p>El cambio climático está aumentando los conflictos sociales y las migraciones, ya que las comunidades vulnerables se ven obligadas a desplazarse debido a desastres naturales, como inundaciones y sequías, y la escasez de recursos básicos como agua y alimentos. Esto provoca tensiones entre comunidades y países por el acceso a estos recursos, lo que puede intensificar los conflictos sociales y políticos.</p>
        <img src={imagen9} ></img>
      </section>

      <section className='seccion' id='acciones'>
        <h2>Qué puedes hacer?</h2>
        <p>El cambio climático es un problema global complejo, pero hay varias acciones que podemos tomar a nivel individual, colectivo y gubernamental para mitigarlo. Aquí algunos enfoques clave:</p>
        <ol>
          <h4>1.Reducir, reutilizar y reciclar.</h4>
          <ul>
            <li>Reducir: Se trata de disminuir el consumo de productos que generan residuos o que tienen un alto impacto ambiental en su producción. Por ejemplo, reducir el uso de plásticos de un solo uso, evitar el consumo innecesario de alimentos o productos desechables, y optar por alternativas más sostenibles.</li>
            <li>Reutilizar: Se refiere a darle una segunda vida a los productos en lugar de desecharlos. Puedes reutilizar envases, ropa, muebles, entre otros. Esto no solo reduce los residuos, sino que también disminuye la demanda de nuevos productos, lo que implica menos energía y recursos.</li>
            <li>Reciclar: Es el proceso de convertir los materiales desechados en nuevos productos. Reciclar correctamente el papel, plástico, vidrio y metales ayuda a reducir la cantidad de residuos que terminan en vertederos y disminuye la necesidad de recursos naturales para fabricar nuevos productos.</li>
          </ul>
          <div className='video' >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YiHTNfKJwAw?si=yM1NG5JbljArfJUt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <h4>2.Usar transporte sostenible.</h4>
          <ul>
            <li>Transporte público: Usar autobuses, trenes y metro reduce la cantidad de vehículos en la carretera y, por lo tanto, las emisiones de gases de efecto invernadero.</li>
            <li>Bicicletas y caminar: Son opciones de transporte que no emiten contaminantes y son saludables para las personas.</li>
            <li>Vehículos eléctricos: Si es necesario conducir, elegir vehículos eléctricos o híbridos es una excelente manera de reducir las emisiones de CO₂, ya que utilizan energía limpia en lugar de combustibles fósiles.</li>
          </ul>
          <img src={imagen10} ></img>
          <h4>3.Consumir energía renovable.</h4>
          <ul>
            <li>Energía solar: Instalar paneles solares en el hogar o en negocios puede generar electricidad de manera limpia, reduciendo la dependencia de fuentes de energía contaminantes como el carbón o el gas natural.</li>
            <li>Energía eólica: Aprovechar la energía del viento mediante aerogeneradores para generar electricidad sin emisiones de gases de efecto invernadero.</li>
            <li>Otras fuentes de energía renovable: Además de solar y eólica, hay otras fuentes como la biomasa o la energía hidroeléctrica que pueden contribuir a una matriz energética más limpia y sostenible.</li>
          
          </ul>
          <img src={imagen11} id='ultima'></img>
        </ol>
        
      </section>
    </main>

    <footer>
      <p>© 2024 Conciencia Climática | Mateo Carrillo</p>
    </footer>
  </div>
  )
}

export default page;