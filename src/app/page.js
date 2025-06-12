"use client";
import Image from "next/image";
import estilos from "./page.module.css";
import Banner from "../../public/banner.jpg";
import Logo from "../../public/logo.png";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa"; // Ícone para o link externo

export default function Page() {
    const [ehTemaEscuro, setEhTemaEscuro] = useState(false);

    const alterarTema = () => {
        setEhTemaEscuro(!ehTemaEscuro);
    };

    return (
        <div
            className={ehTemaEscuro ? estilos.modo_escuro : estilos.modo_claro}
        >
            <header className={estilos.header_container}>
                <div>
                    <Image src={Logo} alt="logomarca" />
                    <button onClick={alterarTema}>
                        {ehTemaEscuro ? <FiSun /> : <FiMoon />}
                    </button>
                </div>
            </header>

            <main className={estilos.main_container}>
                <section className={estilos.secao_banner}>
                    <Image src={Banner} alt="banner" />
                </section>

                <section className={estilos.secao_texto}>
                    <div>
                        <h1>Bem-vindo a Barber Shop</h1>
                        <p>
                            Nossa barbearia sempre oferece profissionais de
                            qualidade e estamos prontos para lidar com suas
                            maiores expectativas.
                        </p>
                        <p>
                            Nossos serviços são dedicados ao seu sucesso
                            pessoal...
                        </p>
                        <p className={estilos.assinatura}>S. Kelly</p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className={estilos.footer}>
                <p className={estilos.footerCopyright}>
                    © {new Date().getFullYear()} Barber Shop - Todos os direitos
                    reservados
                </p>
                <p className={estilos.footerCredits}>
                    Desenvolvido por{" "}
                    <a
                        href="https://portfolio-cleiton.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={estilos.footerLink}
                        aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                    >
                        <span>Cleiton Santos</span>
                        <FaExternalLinkAlt className={estilos.linkIcon} />
                    </a>
                </p>
            </footer>
        </div>
    );
}
