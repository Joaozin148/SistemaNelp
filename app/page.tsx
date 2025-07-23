import { Contact2 } from "./_components/contact";
import CompeticoesEmDestaque from "./_components/conteudo";
import Faq from "./_components/faq";
import Footer from "./_components/footer";
import { Header } from "./_components/header";
import Hero from "./_components/hero";
import Logos from "./_components/logos";
import Photos from "./_components/photos";
import StatsSection from "./_components/stats";
import WhatsAppButton from "./_components/whatsapp";
import AcessibilidadeBar from "./_components/acessibilidade-bar";
import ImpactoSection from "./_components/impacto";
import MissaoDestaqueSection from "./_components/missao-destaque";


export default function Home() {
  return (
    <>
      <AcessibilidadeBar />
      <Header />
      <WhatsAppButton />
      <Hero />
      <ImpactoSection />
      <MissaoDestaqueSection />
      <CompeticoesEmDestaque />
      <Photos />
      <StatsSection />
      <Contact2 
        title="Fale Conosco"
        description="Estamos disponíveis para dúvidas, sugestões ou oportunidades de parceria. Conte com a gente!"
        phone="(41) 99510-9690"
        email="nelpunivolei@gmail.com"
      />
      <Faq />
      <Logos />
      <Footer />
    </>
  );
}
