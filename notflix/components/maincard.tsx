import styles from '../styles/maincard.module.css'
import background from '../images/background.png'
import Image from 'next/Image'


function MainCard() {
    return(
        <>
            <div className={styles['main-container']}>
                <div className={styles['card-container']}>
                    <div className={styles['background-container']}>
                        <div className={styles['image-wrapper']}>
                            <Image className={styles['background-image']} src={background} alt="background image" sizes="100vw"/>
                            <div className={styles.gradient}></div>
                        </div>
                    </div>
                </div>
                <div className={styles['maincard-text']}>
                    <h1 className={styles.title}>
                        Unlimited moves, TV shows, and more.
                    </h1>
                    <h2 className={styles.subtitle}>
                        Watch anywhere. Cancel anytime.
                    </h2>
                </div>

                
            <section>
          
          
          <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
          <input></input>
          <button>Get started</button>
        </section>
            </div>

        </>
    )
}

export default MainCard