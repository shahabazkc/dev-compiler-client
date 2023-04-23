import React from 'react';
import styles from './footer.module.scss';
import usePages from '@/hooks/usePages';

export const Footer = () => {
    const { theme } = usePages();
    return (
        <div className={`${styles.footer} ${styles[`footer_${theme}`]}`}>
            <div className={`${styles.footerContent}`}>
                <p>Copyright © 2023 Shahabaz kc.</p>
            </div>
        </div>
    )
}