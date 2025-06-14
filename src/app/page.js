"use client";
import Image from "next/image";
import estilos from "./page.module.css";
import Banner from "../../public/banner.jpg";
import Logo from "../../public/logo.png";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import {
    FaExternalLinkAlt,
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";

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
                    <button
                        onClick={alterarTema}
                        aria-label="Alternar tema claro/escuro"
                    >
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
                            Na Barber Shop, oferecemos não apenas cortes
                            impecáveis, mas uma experiência de cuidado e estilo.
                        </p>
                        <p>
                            Nossa equipe de profissionais altamente qualificados
                            está sempre pronta para superar suas expectativas e
                            garantir que você saia daqui se sentindo sua melhor
                            versão.
                        </p>
                        <p>
                            Cada serviço que oferecemos é pensado para valorizar
                            sua personalidade e fortalecer sua confiança, porque
                            acreditamos que um bom corte de cabelo faz toda a
                            diferença.
                        </p>
                        <p>
                            Venha conhecer nossa barbearia e descubra como
                            podemos elevar seu visual ao próximo nível!
                        </p>
                        <p className={estilos.assinatura}>S. Kelly</p>
                    </div>
                    <a
                        href="https://wa.me/5567992011664"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={estilos.btnWhatsapp}
                        aria-label="Agendar corte pelo WhatsApp"
                    >
                        Agende seu horário via WhatsApp
                    </a>
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
                <div className={estilos.iconesRedes}>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        aria-label="Instagram"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        aria-label="Facebook"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://wa.me/5567992011664"
                        target="_blank"
                        aria-label="WhatsApp"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </footer>
        </div>
    );
}
