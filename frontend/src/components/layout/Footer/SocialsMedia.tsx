import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

function SocialsMedia() {
    return (
        <div className="mt-6 flex justify-center space-x-6 md:mt-0">
            <a
                href="https://github.com/Mezghani-Aymen"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--primary)] transition-colors"
            >
                <FaGithub size={25} />
            </a>
            <a
                href="https://www.linkedin.com/in/mezghani-med-aymen/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--primary)] transition-colors"
            >
                <FaLinkedin size={25} />
            </a>
            <a
                href="https://wa.me/+21629236016"
                target="_blank" rel="noreferrer"
                className="hover:text-[var(--primary)] transition-colors"
            >
                <FaWhatsapp size={25} />
            </a>
        </div>
    )
}

export default SocialsMedia