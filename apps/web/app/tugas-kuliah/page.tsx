import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Plus, Timer } from "lucide-react";

export default function TugasKuliahPage() {
    return (
        <div className="flex flex-col w-full">
            <Field className="gap-0">
                <FieldLabel className="text-xl font-semibold">
                    Daftar Tugas Kuliah
                </FieldLabel>
                <FieldDescription className="text-sm">
                    Kelola tugas-tugas kuliah Anda.
                </FieldDescription>
            </Field>
            <Field className="mt-2">
                <div className="flex justify-between gap-1">
                    <Badge variant="outline" className="w-fit whitespace-nowrap font-light text-xs my-auto">Total Tugas: 2</Badge>
                    <div className="flex">
                        <Input placeholder="Cari Tugas..." className="max-w-3xs" />
                        <Button className="bg-[#3D50C2] hover:bg-[#3D50C2] hover:text-white transition-colors duration-200 px-4 py-3 rounded-full text-white">
                            <Plus /> Tambah Tugas
                        </Button>
                    </div>
                </div>
            </Field>
            <Field className="gap-0 mt-2">
                <div className="flex gap-2 overflow-x-auto">
                    <Button variant="outline">Semua Mata Kuliah</Button>
                    <Button variant="outline">Pemrograman Perangkat Bergerak</Button>
                    <Button variant="outline">Administrasi Sistem Komputer</Button>
                    <Button variant="outline">Fisika Dasar</Button>
                    <Button variant="outline">Pengujian Perangkat Lunak</Button>
                    <Button variant="outline">Keamanan Basis Data</Button>
                    <Button variant="outline">Proyek Pengembangan Aplikasi Mobile</Button>
                    <Button variant="outline">Interaksi Manusia Komputer</Button>
                </div>
            </Field>
            <Field className="mt-4">
                <Card className="flex flex-col w-full py-3">
                    <CardHeader className="flex justify-between">
                        <Field className="w-fit">
                            <div className="flex gap-1">
                                <Badge variant="destructive">Prioritas Tinggi</Badge>
                                <Badge variant="secondary">Tugas Teori</Badge>
                            </div>
                        </Field>
                        <Field className="w-fit">
                            <div className="flex items-center">
                                <Timer className="size-4 text-gray-500" />
                                <FieldLabel className="text-xs text-gray-500 font-light gap-1 ml-1">
                                    Perkiraan: 3.5 Jam
                                </FieldLabel>
                            </div>
                        </Field>
                    </CardHeader>
                    <CardContent>
                        <Field className="gap-0">
                            <FieldLabel className="text-lg font-bold">Perancangan Arsitektur Cloud</FieldLabel>
                            <FieldLabel className="font-light">Rancang diagram arsitektur multi-region pada penyedia cloud publik</FieldLabel>
                        </Field>
                    </CardContent>
                    <CardFooter className="flex gap-1">
                        <Badge variant="secondary" className="text-[#3D50C2]">
                            Administrasi Sistem Komputer
                        </Badge>
                        <Badge variant="secondary" className="text-[#7A5243]">
                            Senin, 30 Okt - 23.59 WIB
                        </Badge>
                    </CardFooter>
                </Card>
            </Field>
        </div>
    )
}