import NavBar from "@/components/NavBar";
import Consulta from "./Consulta";
import Button from "@/components/Button";
import { PlusIcon  } from '@heroicons/react/24/outline'
import { getConsultas } from "@/actions/consulta";

export default async function Consultas() {

  const data = await getConsultas()

  return (
    <>
      <NavBar active={"consultas"} />

      <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Consultas</h1>
          <Button href="/consultas/new" >
            <PlusIcon className="h6 w-6" />
            agendar consulta
          </Button>
        </div>

        <div id="data">
          {data.map(consulta => <Consulta key={consulta.id} consulta={consulta} />)}
        </div>

      </main>
    </>

  )
}
