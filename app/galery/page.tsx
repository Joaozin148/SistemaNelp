import Galery from "../_components/galery";
import { Header } from "../_components/header";


export default function BentoGridGalleryDemo() {
  return (
    <>
    <Header />
    <div className="min-h-screen overflow-y-auto pt-20">
        <Galery />
    </div>
    </>
  )
}
