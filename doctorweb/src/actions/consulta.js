"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/consultas"

export async function create(formData){

    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(url, options)
    const json = await resp.json()

    if (resp.status !== 201 ){
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {
            message: `Erro ao agendar. ${resp.status} - ${errors} `
        }
    }

    revalidatePath("/consultas")
    return { ok: 'ok' }

}

export async function getConsultas() {
    const token = cookies().get('doctor_token')
    
    const options = {
        headers: {
            "Authorization": `Bearer ${token.value}`
        }
    }

    const resp = await fetch(url, options)
    if (!resp.ok){
        throw new Error("Erro ao obter dados das consultas")
    }

    return resp.json()
}

export async function destroy(id){
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if(resp.status !== 204) 
        return {error: "Erro ao apagar consulta. " + resp.status }

    revalidatePath("/consultas")

}

export async function getConsulta(id){
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !== 200) 
        return {error: "Erro ao buscar dados da consulta. " + resp.status }

    return await resp.json()
    
}

export async function update(consulta){
    const updateUrl = url + "/" + consulta.id

    const options = {
        method: "PUT",
        body: JSON.stringify(consulta),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(updateUrl, options)
    
    if (resp.status !== 200 ){
        return {
            error: `Erro ao atualizar. ${resp.status} `
        }
    }

    revalidatePath("/consultas")
    
}
