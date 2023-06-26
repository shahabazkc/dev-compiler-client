import { NextPage } from "next";
import React from 'react';
import ManageSection from "@/components/manageSectionEditorTab/manageSection";
import FileDirectorySection from "@/components/fileViewer/fileDirectorySection";
import WebOutputSection from "@/components/outputScreen/webOutputSection";
import CodeEditorScreen from "@/components/codeEditor/codeEditor";
import SplitPane from 'react-split';
import usePages from "@/hooks/usePages";

const CodeEditor: NextPage = () => {
    const { theme } = usePages();
    return (
        <>
            <div className={`code_editor_container code_editor_container_${theme}`}>
                <ManageSection />
                <SplitPane
                    direction="horizontal"
                    style={{ height: 'calc(100vh-10rem)' }}
                    className="flex split-pane"
                    sizes={[10, 70, 20]}
                    minSize={[40, 300, 80]}
                    maxSize={[250, 1000, 600]}
                >
                    <FileDirectorySection />
                    <CodeEditorScreen />
                    <WebOutputSection />
                </SplitPane >
            </div >
        </>
    )
}

export default CodeEditor