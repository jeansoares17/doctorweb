"use client"

import { create } from "@/actions/consultas";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation'

export default function FormConsultas() {
    const [ error, setError ] = useState("")
    
    async function handleSubmit(formData){
        const resp =  await create(formData)

        if (resp.message) {
            setError(resp.message)
            return
        }
       redirect("/consultas")
    }

    return (
        <>
            <NavBar active="consultas" />

            

            <main className="bg-slate-900 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Agendar Consultas</h1>
                    <TextField
                        label="nomeDoutor"
                        id="nomeDoutor"
                        name="nomeDoutor"
                    />

                    <TextField
                        label="data"
                        id="data"
                        name="data"
                    />

                    <TextField
                        label="descricao"
                        id="descricao"
                        name="descricao"
                    />

                    <TextField
                        label="usuario"
                        id="usuario"
                        name="usuario"
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
        </>

    )
}
