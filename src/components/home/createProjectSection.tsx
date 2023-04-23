import { languages } from '@/utils/constants/languages';
import styles from './home.module.scss'
import usePages from '@/hooks/usePages';
import React from 'react';

export const CreateProjectSection = () => {
    const { theme } = usePages();
    return (
        <div className="home_project_section">
            <div className={styles.createProjectTabHeader}>
                <h4>Create New Project</h4>
            </div>
            <div className={styles.listCreateProjectSection}>
                {
                    languages.map((lang, index) => {
                        return (
                            <div key={index} className={`${styles.listProjectItem} ${styles[`listProjectItem_${theme}`]}`}>
                                <div className="listProjectContent">
                                    <div className={`${styles.listCreateProjScreenItem} list_create_proj_screen_item`}>
                                        <img className="list_create_proj_screen_item_icon" src={lang.icon} alt={lang.name} />
                                        &nbsp;&nbsp;
                                        <span className="list_create_proj_screen_item_name">{lang.name}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}