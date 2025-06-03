import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button"; 

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4" style={{ backgroundColor: "#011B4E" }}>
      <nav className="flex space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button  className="text-white border-none bg-transparent hover:bg-white/20">
              Profil ▾
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-white text-gray-800 p-2">
            <DropdownMenuItem>
              <a href="#profile" className="w-full block ">Profili Düzenle</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#settings" className="w-full block">Ayarlar</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-white border-none bg-transparent hover:bg-white/20">
              Araç ▾
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-white text-gray-800 p-2">
            <DropdownMenuItem>
              <a href="#araclar" className="w-full block ">Araç Listesi</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#arac-ekle" className="w-full block">Araç Ekle</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button  className="text-white border-none bg-transparent hover:bg-white/20">
              Emlak ▾
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-white text-gray-800 p-2 rounded-lg">
            <DropdownMenuItem>
              <a href="#emlaklar" className="w-full block">Emlak Listesi</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#emlak-ekle" className="w-full block">Emlak Ekle</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <Button variant="destructive">
        Çıkış Yap
      </Button>
    </header>
  );
}
