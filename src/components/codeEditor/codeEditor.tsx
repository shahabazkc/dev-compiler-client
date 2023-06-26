import usePages from "@/hooks/usePages";
import Editor from "@monaco-editor/react";
import React from 'react'
import styles from './codeEditor.module.scss';
import { FileListTab } from "./fileListTab";

const CodeEditorScreen = () => {
    const { theme } = usePages();

    return (
        <div className={`${styles.codeEditorContainer}`}>
            <FileListTab/>
            <Editor language="javascript" theme={theme == "dark" ? "vs-dark" : "vs-light"} height="90vh" defaultValue="function hello(){return 'hello'}" />
        </div>
    )
}

export default CodeEditorScreen;