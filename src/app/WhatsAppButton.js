import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
    return (
        <div className={styles.whatsappIcon}>
            <a
                href="https://wa.me/351912155966"
                target="_blank"
                rel="noopener noreferrer"
                title="Contate-nos pelo WhatsApp"
                aria-label="WhatsApp"
            >
                <img
                    src="/whatsapp-logo-128x128_resized.png"
                    alt="WhatsApp da Barber Shop"
                    className={styles.whatsappImage}
                />
            </a>
        </div>
    );
}
