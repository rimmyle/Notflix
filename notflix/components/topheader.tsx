import styles from '../styles/topheader.module.css'
import logo from '../images/logo.png'
import Image from 'next/Image'

function Topheader() {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles['sub-wrapper]']}>
                
                    <div className={styles.logo}>
                        <Image src={logo} alt="notflix logo" layout="fill" />
                    </div>
  
                </div>
            </div>
        </>
    )
}

export default Topheader