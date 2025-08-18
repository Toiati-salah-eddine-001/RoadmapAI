"use client";

import { useState, useEffect } from "react";
import {useRouter} from "next/navigation";
export default function AuthLoader() {
    const [loading, setLoading] = useState(true);
    const route = useRouter();
// function to fetch user profile
    const fetchProfile = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("No token found");
            return null;
        }
        try {
            const res = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                // credentials: "include" // important: send cookie
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const {profile,success,error,message} = await res.json();

            // simulate delay for loading screen
            setTimeout(() => {
                if (success) {
                    localStorage.setItem("profile", JSON.stringify(profile));
                    route.replace("/Dashboard/PromptPage"); // redirect to dashboard
                } else {
                    route.replace("./Auth/Login");
                    console.log(error,message)// redirect to login if not authenticated
                }
                setLoading(false);
            }, 3000); // 1.5s loading
        } catch (err) {
            console.error(err);
            route.replace("./Auth/Login");
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProfile();
    }, [route]);

    return (
        <div className="flex items-center justify-center h-screen">
            {loading && (
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
}
