import { NextPage } from "next";
import React from 'react'
import styles from './fileDirectory.module.scss';
import { StaticTreeDataProvider, Tree, UncontrolledTreeEnvironment } from 'react-complex-tree';
import "react-complex-tree/lib/style-modern.css";
import { longTree } from "./data";
import js from '../../assets/images/extensionPng/js.png';
import ts from '../../assets/images/extensionPng/ts.png';
import node from '../../assets/images/extensionPng/node.png';
import git from '../../assets/images/extensionPng/git.png';
import env from '../../assets/images/extensionPng/env.png';

const FileDirectorySection: NextPage = () => {

    const getLogoWithText = (text: string) => {
        if(text.includes('package.json')||text.includes('package-lock.json')){
            return (
                <img className={`${styles.fileLogo}`} src={node.src} alt=".json" />
            );
        }
        if (text.includes('.json')) {
            return (
                <img className={`${styles.fileLogo}`} src={js.src} alt=".json" />
            );
        }
        else if (text.includes('.js')) {
            return (
                <img className={`${styles.fileLogo}`} src={js.src} alt=".js" />
            );
        } else if (text.includes('.ts')) {
            return (
                <img className={`${styles.fileLogo}`} src={ts.src} alt=".ts" />
            );
        }else if(text.includes('.gitignore')){
            return (
                <img className={`${styles.fileLogo}`} src={git.src} alt=".git" />
            );
        }else if(text.includes('.env')){
            return (
                <img className={`${styles.fileLogo}`} src={env.src} alt=".env" />
            );
        }

        return null; // Return null if the file extension is not supported
    };

    const renderFileOrPage = ({ title, item }: { title: string, item: any } = { title: '', item: {} }) => {
        if (item.isFolder) {
            return <span>{title}</span>
        }
        else {
            return <span className="flex"> {getLogoWithText(title)} {title}</span>
        }
    }

    return (
        <div className={`${styles.fileDirectoryContainer}`}>
            <style>{`
        :root {
          --rct-color-focustree-item-active-bg: #21211f;
          --rct-color-focustree-item-hover-text: inherit;
          --rct-color-focustree-item-active-text: #fff;
          --rct-bar-color: none;
          --rct-color-focustree-item-hover-bg: #21211f;
          --rct-color-focustree-item-selected-bg: #21211f;
          --rct-color-focustree-item-focused-border: #d60303;
          --rct-color-focustree-item-draggingover-bg: #ecdede;
          --rct-color-drag-between-line-bg: #cf03d6;
          --rct-color-arrow: #b48689;
          --rct-item-height: 30px;
        }
      `}</style>
            <UncontrolledTreeEnvironment<string>
                canDragAndDrop
                canDropOnFolder
                canReorderItems={false}
                dataProvider={
                    new StaticTreeDataProvider(longTree.items, (item, data) => ({
                        ...item,
                        data,
                    }))
                }
                getItemTitle={item => item.data}
                viewState={{
                    'tree-1': {
                        expandedItems: [
                            'public',
                            'src',
                            'pages',
                            'components'
                        ],
                    },
                }}
                canRename={true}

                renderItemTitle={renderFileOrPage}


            >

                <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
            </UncontrolledTreeEnvironment>
        </div>
    )
};

export default FileDirectorySection