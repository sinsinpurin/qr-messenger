import { useRouter } from "next/router"
import QRCode from "qrcode.react"

const QR = ()=>{
    const router = useRouter()
    let { msg } = router.query
    let url = "https://qr-messenger.vercel.app/message/" + msg
    return (
        <>
        <QRCode value={url}/>
        </>
    )
}

export default QR