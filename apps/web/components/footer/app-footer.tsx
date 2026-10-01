import { FieldLabel } from "../ui/field";

export function AppFooter() {
    return (
        <footer className="bg-[#0B1D86] px-4 py-5 text-[#FFFFFF] w-full h-16 flex items-center bottom-0">
            <FieldLabel className="text-sm font-light">Made by pryoject_</FieldLabel>
            <FieldLabel className="text-sm font-light ml-auto">© 2026 Catatugas. All rights reserved.</FieldLabel>
        </footer>
    )
}