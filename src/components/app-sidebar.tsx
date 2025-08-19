"use client"

import { useRouter } from "next/navigation"
import { Calendar, Home, Inbox, Search, Settings, History, Map, LogOut } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/Dashboard/PromptPage",
        icon: Home,
    },
    {
        title: "My Roadmaps",
        url: "/Dashboard/hestoryPage",
        icon: History,
    },
    {
        title: "Browse Roadmaps",
        url: "/Dashboard/PromptPage#roadmaps",
        icon: Map,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    const router = useRouter()

    const handleLogout = () => {
        // 🗑 clear all localStorage (token + user data)
        localStorage.clear()

        // ✅ redirect to login page (or home)
        router.push("/Auth/Login")
    }

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                            {/* 🚪 Logout button */}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 w-full text-left"
                                    >
                                        <LogOut />
                                        <span>Logout</span>
                                    </button>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
