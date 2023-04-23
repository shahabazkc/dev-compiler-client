import React from 'react';
import headerStyles from './header.module.scss';
import usePages from '@/hooks/usePages';
export const HeaderOne = () => {
    const { theme } = usePages();
    return (
        <div className={`${headerStyles.Header_one}`}>
            <style jsx>{
                `
                        div {
                            position: absolute;
                            width: 108.95px;
                            height: 19px;
                            left: 31.86px;
                            top: 12px;
                            font-family: 'Imprima', sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 19px;
                        }
                    `
            }
            </style>
            <h3 className="header_text">Dev Compiler</h3>
        </div >
    )
}