import { Box, Link } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    let history = useHistory();

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit();
        }
    };

    const handleSearchSubmit = () => {
        history.push({
            pathname: '/search-icon',
            state: { searchValue: searchValue }
        });
    };

    return (
        <div>
            <form className="search-bar" onSubmit={(e) => {
                e.preventDefault();
                handleSearchSubmit();
            }}>
                <select className="settt" value={searchValue} onChange={handleSearchChange}>
                    <option value="">All icons</option>
                    <option value="option1">Interface icons</option>
                    <option value="option2">Animated icons</option>
                </select>
                <input
                    type="text"
                    placeholder="Search…"
                    aria-label="search"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
