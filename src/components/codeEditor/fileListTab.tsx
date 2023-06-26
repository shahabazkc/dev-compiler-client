import React from 'react';
import styles from './codeEditor.module.scss';

export const FileListTab = () => {

    const length = 20; // Replace this with the desired length of the array
    const [files,setFiles] = React.useState(Array.from({ length }, (_, index) => index + 1));

    const closeTab = (index:number) => {
        const updFiles = [...files]
        updFiles.splice(index,1);
        setFiles([...updFiles])
    }
    return (
        <div className={`${styles.fileListTabSection}`}>
            <div className={`${styles.tabsContainer}`}>
                {
                    files.map((el, index) => (
                        <div key={index+1} className={`${styles.tabs}`}>
                            <svg style={{ width: "20px", height: "20px",background: "#fff" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="682.667"
                                height="682.667"
                                version="1"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M80 2565V70h5000v4990H80V2565zm3921 215c172-17 292-70 401-175 57-55 138-160 138-179 0-13-329-236-348-236-6 0-24 19-41 43-70 100-145 141-261 141-109 0-171-35-205-117-33-79-9-175 59-235 43-38 99-67 291-152 414-182 567-320 631-570 23-88 23-263 0-350-88-328-427-512-870-472-297 28-531 159-679 380-27 40-47 78-44 85 5 13 351 217 367 217 5 0 24-22 43-48 52-70 136-146 195-176 68-34 131-47 227-47 183 1 290 75 303 212 5 53-10 106-40 145-35 43-118 91-336 190-260 118-347 170-441 264-85 84-140 177-167 281-26 99-23 295 6 379 77 229 279 389 530 419 95 12 127 12 241 1zm-1061-225v-205h-650V500h-470v1850h-650v183c0 100 3 192 6 205l6 22h1758v-205z"
                                    transform="matrix(.1 0 0 -.1 0 512)"
                                ></path>
                            </svg>
                            <span>&nbsp;{`File-${el+1}.ts`}</span> &nbsp;
                            <span onClick={() => closeTab(index)} className={`font-bold text-black cursor-pointer close-tab ${styles.closeTab}`}>X</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}