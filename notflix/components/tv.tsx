import styles from '../styles/tv.module.css'
import tv_pic from '../images/tv.png'
import Image from 'next/Image'
import vid from '../images/video.mp4'

function tv() {
    return (
        <>
            <div className={styles['tv-container']}>
                <div className={styles['text-container']}>
                    <h1 className={styles.title}>Enjoy on your TV.</h1>
                    <h3 className={styles.subtitle}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                </div>
                    <div className={styles.tv}>
                        <Image className={styles['tv-image']} src={tv_pic} alt="tv" layout="fill"/>
                        <video className={styles.video} loop autoPlay muted>
                            <source src={vid} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                
        </>
    )
}

export default tv