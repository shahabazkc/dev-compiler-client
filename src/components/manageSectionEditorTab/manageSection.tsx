import React from 'react'
import styles from './manageSection.module.scss';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { SearchOutlined } from '@mui/icons-material';
const ManageSection = () => {
    return (
        <div className={`${styles.editorManageSection}`}>
            <div className={`${styles.editorManageTabs}`}>
                {
                    new Array(10).fill(0).map((ele, index) => {
                        return (
                            <div className={`${styles.editorManageTab}`}>
                                {
                                    index % 2 == 0 ? <FolderCopyIcon /> : <SearchOutlined />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ManageSection;