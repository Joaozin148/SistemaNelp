import FooterSection from "../_components/footer";
import { Header } from "../_components/header";
import StatsSection from "../_components/stats";
import TransparenciaAdmin from "../_components/transparencia";

export default function Transparencia() {
    return (
        <>
            <Header /> 
            <StatsSection />
            <div className="w-full h-1 bg-red-600 mx-auto max-w-7xl mb-10"></div>
            <TransparenciaAdmin />
            <FooterSection />
        </>
    )
}