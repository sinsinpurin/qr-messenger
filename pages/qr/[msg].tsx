import { useRouter } from "next/router"
import QRCode from "qrcode.react"
import Footer from "components/footer"

import styles from "styles/page/qr.module.scss"

const QR = ()=>{
    const router = useRouter()
    let { msg } = router.query
    let url = "https://qr-messenger.vercel.app/message/" + msg

    const QRDownload = ()=>{
        const canvas = document.getElementById("qr-gen") as HTMLCanvasElement;
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");

        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `QRMessage.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <div className={styles.qrpage}>
            <div className={styles.container}>
                <h1>QR Messenger</h1>
                <div className={styles.showmsg}>Message: {msg}</div>
                <div className={styles.qr}>
                    <QRCode id="qr-gen" value={url}/>
                </div>
                <button className={styles.downloadbutton} onClick={QRDownload}>QRコード　ダウンロード</button>
            </div>
            <Footer/>
        </div>
    )
}

export default QR