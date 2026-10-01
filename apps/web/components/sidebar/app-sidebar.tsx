import Image from "next/image"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
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
import { ChevronDown } from "lucide-react"
import { Field, FieldDescription, FieldLabel } from "../ui/field"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="h-fit">
                            <div className="flex flex-row items-center gap-3">
                                <Image src="/catatugas.png" alt="Catatugas" width={60} height={60} className="pt-1"/>
                                <Field className="gap-0">
                                    <FieldLabel className="text-lg font-bold">
                                        Catatugas
                                    </FieldLabel>
                                    <FieldDescription className="text-sm">
                                        Untuk Mahasiswa Pekerja
                                    </FieldDescription>
                                </Field>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
        </Sidebar>
    )
}