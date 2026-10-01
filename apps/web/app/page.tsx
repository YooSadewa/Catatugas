import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { AlarmClock, AlertCircle, ArrowUpRightIcon, CalendarDays, PlusIcon, Timer, TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Field className="gap-0">
        <FieldLabel className="text-xl font-semibold">
          Kapasitas & Beban Pekan Ini
        </FieldLabel>
        <FieldDescription className="text-sm">
          Perhitungan otomatis waktu luang kerja vs beban akademis.
        </FieldDescription>
      </Field>
      <div className="flex flex-wrap gap-2 mt-4">
        <Card className="flex-1 min-w-[200px] p-5 flex flex-col gap-2">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center justify-between">Kapasitas Akhir Pekan <span className="text-2xl text-blue-600 p-2 rounded-lg bg-blue-600/10"><CalendarDays className="text-blue-600" /></span></CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex gap-1">
            <p className="text-5xl font-bold text-blue-600">11.0</p>
            <p className="text-sm text-gray-500 mt-auto">Jam Maksimal</p>
          </CardContent>
          <CardFooter className="p-0 flex gap-2">
            <Badge variant="secondary">Sabtu: 6 Jam</Badge>
            <p>|</p>
            <Badge variant="secondary">Minggu: 5 Jam</Badge>
          </CardFooter>
        </Card>
        <Card className="flex-1 min-w-[200px] p-5 flex flex-col gap-2">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center justify-between">Total Beban Tugas <span className="text-2xl text-green-600 p-2 rounded-lg bg-green-600/10"><Timer className="text-green-600" /></span></CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex gap-1">
            <p className="text-5xl font-bold text-green-600">9.0</p>
            <p className="text-sm text-gray-500 mt-auto">/11 Jam</p>
          </CardContent>
          <CardFooter className="p-0 flex gap-2">
            <Badge className="bg-green-600">Status: Aman</Badge>
          </CardFooter>
        </Card>
        <Card className="flex-1 min-w-[200px] p-5 flex flex-col gap-2">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center justify-between">Perlu Diperhatikan <span className="text-2xl text-red-600 p-2 rounded-lg bg-red-600/10"><AlertCircle className="text-red-600" /></span></CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex gap-1">
            <p className="text-5xl font-bold text-red-600">1</p>
            <p className="text-sm text-gray-500 mt-auto">Tugas Penting</p>
          </CardContent>
          <CardFooter className="p-0 flex gap-2">
            <Badge variant="destructive" render={<Link href={"#"} >Lihat Tugas <ArrowUpRightIcon data-icon="inlinde-end" /></Link>} />
          </CardFooter>
        </Card>
      </div>
      <Field className="gap-0 mt-6">
        <FieldLabel className="text-xl font-semibold">
          Perencana Akhir Pekan
        </FieldLabel>
        <FieldDescription className="text-sm">
          Atur jadwal pengerjaan bertahap agar tidak mengganggu istirahat dan jam kerja di kantor.
        </FieldDescription>
      </Field>
      <div className="flex flex-wrap gap-4 my-4">
        <Card className="flex-1 min-w-[300px] bg-[#ECECFF] h-fit">
          <CardHeader>
            <Card className="py-4">
              <CardContent className="flex justify-between items-center">
                <div className="flex gap-2">
                  <p className="flex items-center p-1 mt-0.5 bg-[#DEE0FF] rounded-md w-8 h-8 text-[#3D50C2] font-bold">Sab</p>
                  <Field className="gap-0 w-fit">
                    <FieldLabel className="text-md font-bold">
                      Sabtu, 26 Desember 2026
                    </FieldLabel>
                    <FieldLabel className="text-xs">
                      Target Waktu Belajar: 6 Jam
                    </FieldLabel>
                  </Field>
                </div>
                <FieldLabel className="w-fit text-md">
                  <span className="font-bold text-[#3D50C2]">5.5</span> / 6 Jam
                </FieldLabel>
              </CardContent>
              <CardContent className="mt-[-14px]">
                <Progress value={90} className="w-full" />
              </CardContent>
              <CardContent className="flex justify-between mt-[-14px]">
                <FieldLabel className="font-light">90% Terisi</FieldLabel>
                <FieldLabel className="text-green-700">Sisa Waktu: 0.5 Jam</FieldLabel>
              </CardContent>
            </Card>
          </CardHeader>
          <CardContent>
            <Card className="py-4">
              <CardContent className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Field className="gap-0 w-fit">
                    <FieldLabel className="text-md font-bold">
                      Pembuatan Desain UI/UX
                    </FieldLabel>
                    <FieldDescription>
                      Pemrograman Perangkat Bergerak
                    </FieldDescription>
                  </Field>
                </div>
                <FieldLabel className="w-fit text-md">
                   12.00 - 17.00
                </FieldLabel>
              </CardContent>
              <CardFooter className="flex gap-1 justify-between">
                <div className="flex gap-2">
                <Badge variant="destructive"><TriangleAlert /> Prioritas Tinggi</Badge> <Badge className="bg-[#ECECFF] text-black"><AlarmClock /> 5.0 Jam</Badge>
                </div>
                <Link href={"#"} className="w-fit flex items-center text-md text-blue-700">Buka Detail <ArrowUpRightIcon data-icon="inlinde-end" size={20}/></Link>
              </CardFooter>
            </Card>
          </CardContent>
          <CardFooter className="mt-[-12px]">
            <Button className="w-full border-dashed border border-[#757685] bg-[#C5C5D5/40] text-[#757685] h-12 rounded-xl transition-animate duration-200 hover:bg-[#3D50C2] hover:text-white hover:border-[#3D50C2]"><PlusIcon />Tambah Tugas</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1 min-w-[300px] bg-[#ECECFF] h-fit">
          <CardHeader>
            <Card className="py-4">
              <CardContent className="flex justify-between items-center">
                <div className="flex gap-2">
                  <p className="flex items-center p-1 mt-0.5 bg-[#DEE0FF] rounded-md w-8 h-8 text-[#3D50C2] font-bold">Min</p>
                  <Field className="gap-0 w-fit">
                    <FieldLabel className="text-md font-bold">
                      Minggu, 27 Desember 2026
                    </FieldLabel>
                    <FieldLabel className="text-xs">
                      Target Waktu Belajar: 5 Jam
                    </FieldLabel>
                  </Field>
                </div>
                <FieldLabel className="w-fit text-md">
                  <span className="font-bold text-[#3D50C2]">5</span> / 5 Jam
                </FieldLabel>
              </CardContent>
              <CardContent className="mt-[-14px]">
                <Progress value={100} className="w-full" />
              </CardContent>
              <CardContent className="flex justify-between mt-[-14px]">
                <FieldLabel className="font-light">100% Terisi</FieldLabel>
                <FieldLabel className="text-green-700">Sisa Waktu: 0 Jam</FieldLabel>
              </CardContent>
            </Card>
          </CardHeader>
          <CardFooter className="mt-[-12px]">
            <Button className="w-full border-dashed border border-[#757685] bg-[#C5C5D5/40] text-[#757685] h-12 rounded-xl transition-animate duration-200 hover:bg-[#3D50C2] hover:text-white hover:border-[#3D50C2]"><PlusIcon />Tambah Tugas</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}