import styles from '../styles/tv.module.css'
import tv_pic from '../images/tv.png'
import Image from 'next/Image'

function tv() {
    return (
        <>
            <div className={styles['tv-container']}>
                <div className={styles['text-container']}>
                    <h1 className={styles['our-story-card-title']}>Enjoy on your TV.</h1>
                    <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                </div>
                <div className={styles.tv}>
                    <Image className={styles['tv-image']} src={tv_pic} alt="tv" layout="fill"/>
                </div>
                </div>
        </>
    )
}

export default tv