import {createTheme} from "@mui/material";

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1e88e5',
        },
        secondary: {
            main: '#ff6e40',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
})

export const theme = createTheme(customTheme, {
        ...customTheme,
        components: {

        },
    typography: {
            h5: {
                fontSize: '20px',
                fontWeight: 'bold'
            }
    },
    palette: {
        primary: {
            main: '#1976D2', // Main color for primary elements
            light: '#4791db', // Lighter variant of the primary color
            dark: '#115293', // Darker variant of the primary color
            contrastText: '#fff', // Text color that contrasts with the primary color
        },
        secondary: {
            main: '#FF5722', // Main color for secondary elements
            light: '#ff8a50', // Lighter variant of the secondary color
            dark: '#c41c00', // Darker variant of the secondary color
            contrastText: '#fff', // Text color that contrasts with the secondary color
        },
        // Customize other palette options like error, warning, info, and success
        error: {
            main: '#FF0000',
        },
        warning: {
            main: '#FFC107',
        },
        info: {
            main: '#2196F3',
        },
        success: {
            main: '#4CAF50',
        },
        // You can customize the background and text colors as well
        background: {
            default: '#F5F5F5', // Default background color
            paper: '#fff', // Background color for paper elements (cards, dialogs, etc.)
        },
        text: {
            primary: '#333', // Primary text color
            secondary: '#666', // Secondary text color
        },
    },
    breakpoints: {
            values: {
                xs: 400,
                sm: 600,
                md: 810,
                zero: 0
            }
    }
    }
)