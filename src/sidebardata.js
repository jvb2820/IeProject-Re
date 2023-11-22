import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import CarRentalIcon from '@mui/icons-material/CarRental';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import LogoutIcon from '@mui/icons-material/Logout';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/main",
    },
    {
        title: "Book Parking",
        icon: <CarRentalIcon/>,
        link: "/home",
    },
    {
        title: "Status Display",
        icon: <BrowseGalleryIcon/>,
        link: "/home",
    },
    {
        title: "Report",
        icon: <MarkChatReadIcon/>,
        link: "/home",
    },
    {
        title: "Logout",
        icon: <LogoutIcon/>,
        link: "/signin",
    },
]

