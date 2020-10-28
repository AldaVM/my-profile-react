import { motion } from "framer-motion";
import { Section, FormatImage } from "../../../common";
import { AboutMeContainer } from "./Styled";

export default function CardDescription() {
  return (
    <Section bg="#212428" id="aboutme">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <AboutMeContainer>
          <FormatImage
            size="200px"
            picture="https://www.medioambiente.net/wp-content/uploads/guepardo.jpg"
            description="Foto de Aldair Valencia - Desarrollador Web"
            square={true}
          />

          <h1>Hola, soy Aldair</h1>
          <p>
            Trabajo como <strong>JavaScript Developer</strong>, creando
            aplicaciones y sitios web modernos, utilizando principalmente
            tecnologías como
            <strong> HTML</strong>, <strong>CSS</strong> y
            <strong> JavaScript</strong>, además, de participar en proyectos
            empresariales dedicados al desarrollo de soluciones de{" "}
            <strong>Ecommerce</strong>.
          </p>
          <p>
            Paralelamente sigo formandome profesionalmente como desarrollador de
            software, además, de estar constantemente aprendiendo de forma
            autodidacta. En mis tiempos libres me gusta aprender nuevas
            tecnologías, mantenerme al día con las extrañas tendencias de los
            avances del software y compartir mis conocimientos.
          </p>
        </AboutMeContainer>
      </motion.div>
    </Section>
  );
}
