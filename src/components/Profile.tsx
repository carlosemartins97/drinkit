import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallangesContext)


    return (
        <div className={styles.profileContainer} >
            <img src="https://github.com/carlosemartins97.png" alt="Carlos Martins"/>

            <div>
                <strong>Carlos Martins</strong>

                <p>
                    <img src="icons/level.svg" alt="Ícone do Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}