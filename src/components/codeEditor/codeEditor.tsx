import Editor from "@monaco-editor/react";
import React from 'react'


const CodeEditorScreen = () => {
    return (
        <>
            <Editor language="javascript" theme="vs-dark" height="90vh" defaultValue="function hello(){return 'hello'}" />
        </>
    )
}

export default CodeEditorScreen;