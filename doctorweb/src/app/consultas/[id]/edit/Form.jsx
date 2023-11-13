"use client"

import { create, update } from "@/actions/consultas";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation'
export default function FormEdit({consulta}){
    const [ error, setError ] = useState("")
    const [consultaEdit, setConsultaEdit] = useState(consulta)
    
    async function handleSubmit(){
        const resp =  await update(consultaEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }
        
       redirect("/consultas")
    }

    function handleFieldChange(field, value){
        setConsultaEdit({
            ...consultaEdit,
            [field]: value
        })
    }

    return (
        <main className="bg-slate-900 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Editar Consultas</h1>
                    <TextField
                        label="nomeDoutor"
                        id="nomeDoutor"
                        name="nomeDoutor"
                        value={consultaEdit.nomeDoutor}
                        onChange={(e) => handleFieldChange("nomeDoutor", e.target.value )}
                    />

                    <TextField
                        label="data"
                        id="data"
                        name="data"
                        value={consultaEdit.data}
                        onChange={(e) => handleFieldChange("data", e.target.value )}
                    />

                    <TextField
                        label="descricao"
                        id="descricao"
                        name="descricao"
                        value={consultaEdit.descricao}
                        onChange={(e) => handleFieldChange("descricao", e.target.value )}
                    />

                    <TextField
                        label="usuario"
                        id="usuario"
                        name="usuario"
                        value={consultaEdit.usuario}
                        onChange={(e) => handleFieldChange("usuario", e.target.value )}
                    />  

                    <div className="flex justify-around mt-4">
                        <Button href="/consultas" variant="secondary">cancelar</Button>
                        <Button type="button">
                            <CheckCircleIcon className="h-6 w-6" />
                            salvar
                        </Button>

                    </div>

                    <span className="text-red-500">{error}</span>

                </form>
            </main>

    )
}