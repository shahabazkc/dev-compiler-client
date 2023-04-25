import { NextPage } from "next";
import React from 'react'

import ManageSection from "@/components/codeEditor/manageSection";
import FileDirectorySection from "@/components/codeEditor/fileDirectorySection";
import WebOutputSection from "@/components/codeEditor/webOutputSection";
import CodeEditorScreen from "@/components/codeEditor/codeEditor";
import SplitPane from 'react-split';
const CodeEditor: NextPage = () => {
    return (
        <>
            <div className="code_editor_container">
                <div className="manage_section">
                    <ManageSection />
                </div>
                <SplitPane
                    direction="horizontal"
                    style={{ height: 'calc(100vh-10rem)' }}
                    className="flex split-pane"
                    sizes={[10,70,20]}
                    minSize={[40,300,80]}
                    maxSize={[250,1000,600]}
                >
                    <div>
                        <FileDirectorySection />
                    </div>

                    <div>
                        <CodeEditorScreen />
                    </div>
                    <div>
                        <WebOutputSection />
                    </div>
                </SplitPane >
            </div >
        </>
    )
}

export default CodeEditor