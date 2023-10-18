"use client";
import './styles.css';
import { SessionProvider } from "next-auth/react";

function Providers({ children }) {
    return <SessionProvider>

        {children}

    </SessionProvider>;
}

export default Providers;
