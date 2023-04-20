import { logoutUserAsync } from "@/redux/api";
import { AppDispatch, RootState } from "@/redux/store";
import { InputAdornment, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AccountCircleRounded, ArrowDropDown, ArrowDropUp, Search } from "@mui/icons-material";

export const HeaderTwo = ({ getHeaderColor }: { getHeaderColor: () => string }) => {
    const dispatch = useDispatch<AppDispatch>()
    const { user: { userData } } = useSelector((state: RootState) => state);
    const [search, setSearch] = useState<string>('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Close the dropdown when the user clicks outside of it
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (event.target.closest('.header_account_container') === null) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function handleIconClick() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        try {
            const data = await dispatch(logoutUserAsync()).unwrap();
            if (data.status) {
                window.location.replace("/login");
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error.message || "Something went wrong");
        }
    }
    return (
        <div className="top_header_container">
            {/* react/no-unknown-property */}
            <style jsx={true}>{
                `
                        .top_header_container {
                             position: absolute;
                             padding-left: 3%;
                             width: 100%;
                             padding-top: 15px;
                             padding-right: 3%;
                             font-family: 'Imprima', sans-serif;
                             font-style: normal;
                             font-weight: 400;
                             font-size: 16px;
                             line-height: 19px;
                             color: ${getHeaderColor()};
                            }
                            .top_header_content{
                                width: 100%;
                                display: flex;
                                flex-direction: row;
                            }
                            .header_text_container {
                               margin-right: auto;
                            }
                            .header_search_container{
                                margin: 0 auto;
                            }
                            .header_account_container{
                                margin-left: auto;
                            }
                          
                        `
            }
            </style>
            <div className="top_header_content">
                <div className="header_text_container">
                    <h3 className="header_text">Dev Compiler</h3>
                </div>
                <div className="header_search_container">
                    <TextField
                        style={{
                            color: "#fff"
                        }}
                        type="text"
                        variant="outlined"
                        size="small"
                        color="primary"
                        sx={{
                            fieldset: { borderColor: "#fff" }
                        }}
                        InputProps={{
                            style: {
                                color: '#fff',
                                borderColor: 'white'
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search style={{ color: "#fff" }} />
                                </InputAdornment>
                            ),
                        }}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                    />
                </div>
                <div className="header_account_container">
                    <div className="header_account_section" onClick={handleIconClick}>
                        {
                            userData?.avatar ? <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="profile" src={userData.avatar} /> : <AccountCircleRounded fontSize="large" />
                        }

                        {isDropdownOpen ? <ArrowDropDown /> : <ArrowDropUp />}
                    </div>
                    {isDropdownOpen && (
                        <div className="header_account_dropdown" style={{ position: 'absolute', backgroundColor: "black", color: "white" }}>
                            {/* Dropdown content goes here */}
                            <Button onClick={(e) => handleLogout(e)}>Logout</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}