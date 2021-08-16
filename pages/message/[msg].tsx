import { useRouter } from "next/router"
import styles from "styles/page/message.module.scss"

const Message = ()=>{
    const router = useRouter()
    let { msg } = router.query
    return (
        <div className={styles.messagepage}>
            <div className={styles.container}>
                <div className={styles.balloon}>
                    <div className={styles.message}>
                        {msg}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message