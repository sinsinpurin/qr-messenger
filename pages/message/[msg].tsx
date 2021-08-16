import { useRouter } from "next/router"

const Message = ()=>{
    const router = useRouter()
    let { msg } = router.query
    return (
        <div className="message">
            {msg}
        </div>
    )
}

export default Message