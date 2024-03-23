import { Box, Link } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledPaper = styled('div')({
    position: 'absolute',
    zIndex: 1,
    mt: 1,
    width: '100%',
    maxHeight: '250px',
    overflowY: 'auto',
    backgroundColor: '#cccccc90',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px #434343de'
});

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

            <form className="search-bar" onSubmit={handleSearchSubmit}>
                <TextField
                    select
                    label="Icon Type"
                    sx={{ width: '200px' }}
                    variant="outlined"
                    size="small"
                    // value={iconType}
                    // onChange={(event) => setIconType(event.target.value)}
                    // onChange={getIconType}
                >
                    <MenuItem value="all">All Icons</MenuItem>
                    <MenuItem value="icon">Icon</MenuItem>
                    <MenuItem value="interface">Interface</MenuItem>
                    <MenuItem value="animated">Animated</MenuItem>
                    <MenuItem value="popular">Popular</MenuItem>
                </TextField>

                <Box sx={{ position: 'relative', width: '100%' }}>
                    <TextField
                        label="Search"
                        fullWidth
                        variant="outlined"
                        size="small"
                        // value={searchValue}
                        // onChange={handleSearchChange}
                        // onKeyPress={handleKeyPress}
                        // inputRef={inputRef}
                    />
                    {searchValue && (
                        <StyledPaper>
                            <MenuList>
                                {/* {suggestions.map((suggestion, index) => (
                                    <MenuItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion}
                                    </MenuItem>
                                ))} */}
                            </MenuList>
                        </StyledPaper>
                    )}
                </Box>
                <button type="submit">Search</button>
            </form>

            {/* <form className="search-bar" onSubmit={(e) => {
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
            </form> */}
        </div>
    );
};

export default SearchBar;
