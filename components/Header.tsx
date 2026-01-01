"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pageTitles } from "@/lib/pageTitles";

export default function Header() {
    const path = usePathname();
    const pageTitle = pageTitles[path] || 'David Ramos';
    return (
        <header className="shadow bg-secondary-subtle py-2 px-3 d-flex justify-content-between align-items-center">
            {/* <h1 className="text-center">{pageTitle}</h1> */}
            <h2 className="m-0">David Ramos</h2>
            <div className="d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid text-center justify-content-center">
                        {/* <a className="navbar-brand" href="#">Menu</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={`nav-link ${path === '/' ? 'active' : ''}`} href="/">Inicio</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Trabajos</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="reloops" className="dropdown-item">Reloops</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}