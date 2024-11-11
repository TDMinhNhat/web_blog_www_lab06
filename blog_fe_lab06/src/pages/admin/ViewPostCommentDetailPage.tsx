import { useParams } from "react-router-dom"

export default function ViewPostCommentDetailPage() {
    
    const { id } = useParams<{ id: string }>();

    return (
        <>
            {id}
        </>
    )
}