import { useParams } from "react-router-dom"

export default function ViewPostDetailPage() {
    
    const { id } = useParams<{ id: string }>()

    return (
        <>
        {id}
        </>
    )
}