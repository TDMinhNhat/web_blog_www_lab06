import { useParams } from "react-router-dom"

export default function ViewUserDetailPage() {
    
    const { id } = useParams<{ id: string }>()

    return (
        <>
            { id }
        </>
    )
}