import Image from "next/image";
import fotoPerfil from "@/public/images/perfil.jpg"

export default function Home() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <Image src={fotoPerfil} alt="perfil" width={150} height={150} className="rounded-circle" style={{
					objectFit: 'cover',
					objectPosition: '0 -15px'
				}} />
                <h5 className="my-3">David Ramos</h5>
                <p className="text-muted mb-1">Técnico Superior en Desarrollo de Aplicaciones Web</p>
                <p className="text-muted mb-4">Guadalajara, España</p>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-4">Contacto</h5>
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://oasissenpai.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                    <p className="mb-0">oasissenpai</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                    <p className="mb-0">@oasissenpai</p>
                  </li> */}
				  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-mobile fa-lg text-info"></i>
                    <p className="mb-0"><a href="tel:+34654972535">+34 654 97 25 35</a></p>
                  </li>
				  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-envelope fa-lg text-info"></i>
                    <p className="mb-0"><a href="mailto:dramosrodriguez323@proton.me">dramosrodriguez323@proton.me</a></p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title mb-4">Idiomas</h5>
                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Español (nativo)</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Inglés (estudiando C1)</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Francés (B1)</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title mb-4">Habilidades</h5>
                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Python</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Diseño web</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>BBDD</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Ofimática</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Trabajo en equipo</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Perfil</h5>
                <p className="card-text">Soy un desarrollador enfocado en el diseño y creación de aplicaciones web. Soy una persona organizada, con buena gestión del tiempo, capacidad de trabajo en equipo y aprendizaje rápido de nuevas tecnologías.</p>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Educación</h5>
                <div className="mb-3">
                    <h6><strong>CFGM - Sistemas Microinformáticos y Redes</strong></h6>
                    <p className="text-muted mb-0">IES Arcipreste de Hita, Azuqueca de Henares (Guadalajara)</p>
                    <p className="text-muted mb-0">2022 - 2024</p>
                    <p>He estudiado un grado medio enfocado tanto en la informática como en el montaje y mantenimiento de equipos, trabajo con sistemas operativos, redes locales, aplicaciones ofimáticas y seguridad informática.</p>
                </div>
                <div className="mb-3">
                    <h6><strong>CFGS - Desarrollo de Aplicaciones Web</strong></h6>
                    <p className="text-muted mb-0">IES Arcipreste de Hita, Azuqueca de Henares (Guadalajara)</p>
                    <p className="text-muted mb-0">2024 - 2026</p>
                    <p>Estoy finalizando un grado superior dirigido al diseño y desarrollo de aplicaciones web en backend y frontend. Desempeño autónomo con lenguajes de programación.</p>
                </div>
                <div className="mb-3">
                    <h6><strong>CLMSKILLS</strong></h6>
                    <p className="text-muted mb-0">IES Arcipreste de Hita, Azuqueca de Henares (Guadalajara)</p>
                    <p className="text-muted mb-0">2025</p>
                    <p>Represento a mi IES en el Campeonato Regional de Formación Profesional en la modalidad de Desarrollo de Aplicaciones Web.</p>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Experiencia</h5>
                <div className="mb-3">
                    <h6><strong>INNOLANDIA - Edición de vídeo</strong></h6>
                    <p className="text-muted mb-0">2024</p>
                    <p>Edición de vídeos para su publicación en plataforma de formación online.</p>
                </div>
                <div>
                    <h6><strong>Becton Dickinson, S.A. – Prácticas de CFGM</strong></h6>
                    <p className="text-muted mb-0">Abril 2024 - Junio 2024</p>
                    <p>Mis prácticas de grado medio fueron en una multinacional de productos sanitarios. Las prácticas incluían asistencia y soporte a los trabajadores respecto a los equipos informáticos y redes, así como a la preparación y configuración de los equipos.</p>
                </div>
                <div>
                    <h6><strong>Reloops – Actualización página web</strong></h6>
                    <p className="text-muted mb-0">2024 y 2025</p>
                    <p>Revisión y actualización de la página web añadiendo apartados y mejorando la apariencia.<br />Creación de subdominio para el alojamiento de aplicaciones NodeJS. <a href="reloops">Más información.</a></p>
                </div>
                <div>
                    <h6><strong>Proyectos personales – Desarrollo de aplicaciones</strong></h6>
                    <p>He desarrollado dos aplicaciones para Android:<br />Aplicación para el AMPA del IES Profesor Domínguez Ortiz (Azuqueca de Henares) en la que los socios tienen descuentos en la cafetería del instituto mediante códigos QR (2021).<br />Aplicación que indica la altura, velocidad, distancia recorrida, giros, cuando se viaja en avión (2021).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}