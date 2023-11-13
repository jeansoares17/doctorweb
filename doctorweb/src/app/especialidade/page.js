import NavBar from "@/components/NavBar";
import especialidadesimage from "@/images/especialidades.jpg"
import Image from "next/image";

export default function Especialidade() {
  return (
    <>
      <NavBar active={"especialidades"} />

      <main>
        <h1>Especialidades</h1>
        <aside className="hidden lg:flex">
          <Image src={especialidadesimage} className="h-full w-full object-cover" />
        </aside>
        
      </main>
    </>

  )
}
