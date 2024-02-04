import React from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Header() {
    return (
        <header>
            <h1 className="d-flex align-items-center"><MenuBookIcon id="menuBookIcon"/>Recipe App</h1>
        </header>
    )
}

export default Header;