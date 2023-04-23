import usePages from "@/hooks/usePages";
import { supportedImportRepoSources } from "@/utils/constants/importRepos"
import styles from './home.module.scss';
import React from "react";

export const ImportRepoSection = () => {
    const { theme } = usePages();
    return (
        <div className="import_repo_container">
            <div className={styles.importRepoTabHeader}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                </svg> &nbsp;&nbsp;
                <h4>
                    Import your repository</h4>
            </div>
            <div className={styles.listImportRepoSection}>
                {
                    supportedImportRepoSources.map((source, index) => {
                        return (
                            <div key={index} className={`${styles.listProjectItem} ${styles[`listProjectItem_${theme}`]} ${styles.listRepoItem}`}>
                                <div className="listRepoSourcesTab">
                                    <div className={`${styles.listCreateProjScreenItem}`}>
                                        <img src={source.icon} alt={source.name} />
                                        &nbsp;&nbsp;
                                        <span>{source.name}</span>
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