import Image from "next/image"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CalendarClock, CalendarDays, ChevronDown, ClipboardList, CloudUpload, File, LayoutDashboard, LogOut, Plus, Settings, Trash } from "lucide-react"
import { Field, FieldDescription, FieldLabel } from "../ui/field"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function AppSidebar() {
    return (
        <Sidebar style={{ "--sidebar": "#F4F2FF" } as React.CSSProperties}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="h-fit hover:!bg-transparent cursor-default">
                            <SidebarMenuItem className="flex flex-row items-center gap-3">
                                <Image src="/catatugas.png" alt="Catatugas" width={60} height={60} className="pt-1" />
                                <Field className="gap-0">
                                    <FieldLabel className="text-lg font-bold">
                                        Catatugas
                                    </FieldLabel>
                                    <FieldDescription className="text-sm">
                                        Untuk Mahasiswa Pekerja
                                    </FieldDescription>
                                </Field>
                            </SidebarMenuItem>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuButton className="bg-white p-2 h-fit w-full rounded-lg mt-6">
                        <SidebarMenuItem className="flex flex-row items-center gap-3">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Field className="gap-0">
                                <FieldLabel className="text-md font-bold">
                                    Muhammad Thio Sadewa
                                </FieldLabel>
                                <FieldDescription className="text-xs">
                                    Software Engineering '25
                                </FieldDescription>
                            </Field>
                        </SidebarMenuItem>
                    </SidebarMenuButton>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="bg-[#3D50C2] hover:bg-[#576ADD] hover:text-white transition-colors duration-100 text-white h-fit w-full rounded-lg flex align-center justify-center font-semibold text-md py-3 rounded-full">
                                <CloudUpload /> Unggah Tugas Baru
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="mt-6 flex flex-col gap-2 font-medium">
                            <SidebarMenuButton className="text-md hover:bg-[#576ADD] hover:text-white transition-colors duration-200 px-4 py-3 rounded-sm">
                                <LayoutDashboard /> Dashboard
                            </SidebarMenuButton>
                            <SidebarMenuButton className="text-md hover:bg-[#576ADD] hover:text-white transition-colors duration-200 px-4 py-3 rounded-sm">
                                <ClipboardList /> Tugas Kuliah
                            </SidebarMenuButton>
                            <SidebarMenuButton className="text-md hover:bg-[#576ADD] hover:text-white transition-colors duration-200 px-4 py-3 rounded-sm">
                                <CalendarDays /> Rencana Akhir Pekan
                            </SidebarMenuButton>
                            <SidebarMenuButton className="text-md hover:bg-[#576ADD] hover:text-white transition-colors duration-200 px-4 py-3 rounded-sm">
                                <File /> Brankas Berkas
                            </SidebarMenuButton>
                            <SidebarMenuButton className="text-md hover:bg-[#576ADD] hover:text-white transition-colors duration-200 px-4 py-3 rounded-sm">
                                <CalendarClock /> Jadwal Kalender
                            </SidebarMenuButton>
                            <SidebarMenuButton className="text-md hover:bg-[#576ADD] hover:text-white transition-colors duration-200 px-4 py-3 rounded-sm">
                                <Trash /> Tempat Sampah
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <hr className="mx-3" />
            <SidebarFooter>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem className="flex flex-col gap-2 font-medium">
                            <SidebarMenuButton className="text-md hover:bg-[#576ADD] hover:text-white transition-colors duration-200 px-4 py-3 rounded-sm">
                                <Settings /> Setelan
                            </SidebarMenuButton>
                            <SidebarMenuButton className="text-md bg-red-600 text-white hover:bg-red-700 hover:text-white transition-colors duration-200 px-4 py-3 rounded-sm">
                                <LogOut /> Keluar
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    )
}