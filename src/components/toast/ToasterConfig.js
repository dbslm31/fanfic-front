// ToasterConfig.js
import { Toaster } from 'react-hot-toast';

function ToasterConfig() {
    return (
        <Toaster
    position="bottom-right"
    gutter={24}
    toastOptions={{
        success: {
            style: {
                background: 'rgb(50, 89, 62)',
                color: 'white',
                borderRadius: 5,
                fontWeight: 600,

            },
            iconTheme: {
                primary: 'white',
                secondary: 'rgb(50, 89, 62)',
            },
        },
        error: {
            style: {
                background: 'red',
                color: 'white',
                borderRadius: 5,
                fontWeight: 600,
                
            },
            iconTheme: {
                primary: 'white',
                secondary: 'red',
            },
        },
    }} 
/>
    );
}

export default ToasterConfig;