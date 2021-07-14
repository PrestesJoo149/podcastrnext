import Image from 'next/image';
import format from 'date-fns/format';
import prBr from 'date-fns/locale/pt-BR'
import logoImg from '../../../public/logo.svg';
import styles from './styles.module.scss';

export function Header (){
    const currentData =  format(new Date(),'EEEEEE, d MMMM', {
       locale: prBr,
    })
    return (
        <header className={styles.headerContainer}>
           <Image src={logoImg} alt ="Podcastr" />

           <p>O melhor para você ouvir, sempre</p>

           <span>{currentData}</span>
        </header>
    );

}