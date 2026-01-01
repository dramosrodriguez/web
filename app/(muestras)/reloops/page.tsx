import Image from "next/image";

export default function Reloops() {
    return (
        <section className="py-5">
            <div className="container">
                <h1 className="text-center mb-5">Capturas de pantalla de proyectos</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <Image src="/images/error404-reloops.png" className="card-img-top" alt="Proyecto 1" width={500} height={300} />
                            <div className="card-body">
                                <h5 className="card-title">ERROR 404</h5>
                                <p className="card-text">
                                    Rediseño de la pagina de Error 400 en la página de <a href="https://www.reloops.es" target="_blank">Reloops.es</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <Image src="/images/apartadosApps-reloops.png" className="card-img-top" alt="Proyecto 2" width={500} height={300} />
                            <div className="card-body">
                                <h5 className="card-title">Pestaña aplicaciones</h5>
                                <p className="card-text">
                                    Creación y diseño de la pestaña de aplicaciones en <a href="https://reloops.es/aplicaciones/" target="_blank">Reloops.es</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <Image src="/images/aplicaciones-reloops.png" className="card-img-top" alt="Proyecto 3" width={500} height={300} />
                            <div className="card-body">
                                <h5 className="card-title">Subdominio</h5>
                                <p className="card-text">
                                    Creación de subdominio para alojar aplicaciones NodeJS en <a href="https://aplicaciones.reloops.es" target="_blank">Reloops.es</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6 mb-4">
                        <div className="card">
                            <Image src="/images/aplicaciones-reloops.png" className="card-img-top" alt="Proyecto 4" width={500} height={300} />
                            <div className="card-body">
                                <h5 className="card-title">Proyecto 4</h5>
                                <p className="card-text">
                                    Esta es una breve descripción del cuarto proyecto. Menciona si fue un proyecto personal o para un cliente.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}