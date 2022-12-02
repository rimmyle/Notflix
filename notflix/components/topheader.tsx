import styles from '../styles/topheader.module.css'
import logo from '../images/logo.png'
import Image from 'next/Image'
import { Dropdown } from '@nextui-org/react'

function Topheader() {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles['sub-wrapper']}>
                    <div className={styles.separator}>
                        <div className={styles.logo}>
                            <Image src={logo} alt="notflix logo" layout="fill" />
                        </div>
                    </div>

                    <div className={styles['select-container']}>
                        <div className={styles['select-wrapper']}>
                            <Dropdown>
                                <Dropdown.Button flat>English</Dropdown.Button>
                                <Dropdown.Menu aria-label="Static Actions"
                                selectionMode = "single">
                                    <Dropdown.Item key="english">English</Dropdown.Item>
                                    <Dropdown.Item key="lol">A Different Language</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <a href="" className={styles['sign-in-button']}>Sign In</a>

                    
                </div>
                
            </div>
        </>
    )
}

export default Topheader