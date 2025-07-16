import { Contact2 } from "./_components/contact";
import CompeticoesEmDestaque from "./_components/conteudo";
import Faq from "./_components/faq";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Logos from "./_components/logos";
import Photos from "./_components/photos";
import StatsSection from "./_components/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <CompeticoesEmDestaque />
      <Photos />
      <StatsSection />
      <Contact2 
      title="Fale Conosco"
      description="Estamos disponíveis para dúvidas, sugestões ou oportunidades de parceria. Conte com a gente!"
      phone="(123) 34567890"
      email="email@example.com"
      />
      <Logos />
      <Faq />
      <Footer />
    </>
  );
}
