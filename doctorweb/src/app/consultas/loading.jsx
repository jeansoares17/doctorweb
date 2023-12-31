import NavBar from "@/components/NavBar";
import Consulta from "./Consulta";
import Button from "@/components/Button";
import { PlusIcon } from '@heroicons/react/24/outline'
import { getConsultas } from "@/actions/consulta";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
    const data = Array(3).fill({})

    return (
        <>
            <NavBar active={"consultas"} />

            <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">Consulta</h1>
                    <Button href="/consultas/new" >
                        <PlusIcon className="h6 w-6" />
                        agendar consulta
                    </Button>
                </div>

                <div id="data">
                    {data.map(() => {
                        return (
                            <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-slate-700">
                                <div className="flex gap-2">
                                    <Skeleton className="h-7 w-6 bg-slate-600 rounded-full" />
                                    <Skeleton className="h-7 w-32 bg-slate-600" />
                                </div>
                                <div className="flex items-center">
                                    <Skeleton className="h-7 w-10 bg-slate-600" />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </main>
        </>

    )
}
