import usePages from "@/hooks/usePages";
import React from "react"
import styles from './home.module.scss';
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export const ProjectTable = () => {
    const { theme, themeBaseColor } = usePages();
    const [projectSearch, setProjectSearch] = React.useState<string>('');

    const [projectList] = React.useState<any[]>([
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis',
            icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png',
            updated: Date.now()
        },
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis',
            icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png',
            updated: Date.now()
        },
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis',
            icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png',
            updated: Date.now()
        },
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis',
            icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png',
            updated: Date.now()
        }
    ]);
    return (
        <div className={`${styles.homeProjectTable}`}>
            <div className={`${styles.homeProjectTableHeader}`}>
                <h4>Projects</h4> &nbsp;
                <div className={`${styles.projectCount} bg-zinc-600 rounded-md bg-container p-2`}>
                    <span className="">17</span>
                </div>
                <div className={`${styles.projectSearchIcon}`}>
                    <TextField
                        type="text"
                        variant="outlined"
                        size="small"
                        sx={{
                            fieldset: { borderColor: `${themeBaseColor.text}` }
                        }}
                        InputProps={{
                            style: {
                                color: themeBaseColor.text,
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search style={{ color: themeBaseColor.text }} />
                                </InputAdornment>
                            ),
                        }}
                        value={projectSearch}
                        onChange={(e) => setProjectSearch(e.target.value)}
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className={`${styles.homeProjectTableContent}`}>
                <div className={`${styles.homeProjectTableContentHeader}`}>
                    <div className={`${styles.homeProjectTableTitle}`}>
                        <span className={`${styles.homeProjectTableContentHeaderItemText}`}>Title</span>
                    </div>
                    <div className={`${styles.homeProjectTableDescription}`}>
                        <span className={`${styles.homeProjectTableContentHeaderItemText}`}>Description</span>
                    </div>
                    <div className={`${styles.homeProjectTableUpdated}`}>
                        <span className={`${styles.homeProjectTableContentHeaderItemText}`}>Updated</span>
                    </div>
                    <div className={`${styles.homeProjectTableAction}`}>
                        <span className={`${styles.homeProjectTableContentHeaderItemText}`}>Action</span>
                    </div>
                </div>
                <hr className="border-2 border-gray-600 mt-2 mb-4" />
                <div className={`${styles.homeProjectTableContentBody}`}>
                    {
                        projectList.map((project, index) => {
                            return (
                                <div key={index} className={`${styles.projectTableItem}`}>
                                    <div  className={`${styles.homeProjectTableContentBodyItem} ${styles[`homeProjectTableContentBodyItem_${theme}`]}`}>
                                        <div className={`${styles.homeProjectTableTitle}`}>
                                            <div className={`${styles.homeProjectTableContentBodyItemContentName}`}>
                                                <img src={project.icon} alt="" /> &nbsp; &nbsp;
                                                <h4>{project.title}</h4>
                                            </div>
                                        </div>
                                        <div className={`${styles.homeProjectTableDescription}`}>
                                            <p>{project.description}</p>
                                        </div>
                                        <div className={`${styles.homeProjectTableUpdated}`}>
                                            <span>{project.updated}</span>
                                        </div>
                                        <div className={`${styles.homeProjectTableAction}`}>
                                            <span className={`${styles.homeProjectTableContentBodyItemActionText}`}>View</span>
                                        </div>
                                    </div>
                                    <hr className="border-2 border-gray-600 mt-1" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
