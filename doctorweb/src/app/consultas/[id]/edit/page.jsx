
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";
import { getConsulta } from "@/actions/consultas";

export default async function FormConsultas({params}) {
    
    const consulta= await getConsulta(params.id)
        
    return (
        <>
            <NavBar active="consultas" />
            <FormEdit consulta={consulta} />
        </>
    )
}
