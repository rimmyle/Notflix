import styles from '../styles/advert.module.css'
import Image from 'next/image'

function Advert () {
    return(
    <>
        <div className={styles.container}>
          <div className={styles['badge-me']}>New!</div>
          <div className={styles['ad-text']}>
            <span>Plans now start at  
            <span className={styles['price-text']}> $6.99</span>
            .
            </span>
          </div>
          <div className={styles['learn-button-container']}>
            <a className={styles['button-element']} href=""> 
                Learn nothing
            </a>
          </div>
        </div>

    </>
    )
}

export default Advert