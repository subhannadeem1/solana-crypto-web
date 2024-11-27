"use client";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "@/public/Logo.png"
import Image from 'next/image'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";  // Import this
import { useWallet } from "@solana/wallet-adapter-react";  
  

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const handleLinkClick = () => {
    setIsSheetOpen(false);  // Close the sheet when a link is clicked
  };
  const { connected } = useWallet();
  return (
    <>
    <nav className="flex items-center z-50 backdrop-blur-[10px] justify-between h-20 fixed w-full border-b  text-white py-4 xl:px-16 px-5 "
    style={{ 
      borderImageSource: 'linear-gradient(90deg, rgba(80, 45, 153, 0) 0%, #854BFF 61%)',
      borderImageSlice: 1,
    }}>
      <div className='flex'>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        
        <SheetTrigger asChild>
          <Button variant="ghost"  size="icon" className="xl:hidden  ">
            <MenuIcon className="h-6 w-7 text-[#854BFF] " />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="xl:hidden">
          <div className="grid gap-4 p-4">
            <Link href="#AboutUS" className="hover:text-[#854BFF]" prefetch={false} onClick={() => setIsSheetOpen(false)}>
              ABOUT
            </Link>
            <Link href="#EcoSystem" className="hover:text-[#854BFF]" prefetch={false} onClick={() => setIsSheetOpen(false)}>
              ECO SYSTEM
            </Link>
            <Link href="#BusinessUtility" className="hover:text-[#854BFF]" prefetch={false} onClick={() => setIsSheetOpen(false)}>
              BUSINESS UTILITY
            </Link>
            <Link href="#TOKENOMICS" className="hover:text-[#854BFF]" prefetch={false} onClick={() => setIsSheetOpen(false)}>
              TOKENOMICS
            </Link>
            <Link href="#RoadMap" className="hover:text-[#854BFF]" prefetch={false} onClick={() => setIsSheetOpen(false)}>
              ROADMAP
            </Link>
            <Link href="#" className="hover:text-[#854BFF]" prefetch={false} onClick={() => setIsSheetOpen(false)}>
              WHITEPAPER
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Image
              src={Logo}
              alt=""
              className="w-[167px] h-[32px] xs:w-[140px] xs:h-[25px] xs:mt-2"
            />
      </div>
      <div className="hidden xl:flex text-base font-medium space-x-[24px]">
        <Link href="#AboutUS" className="hover:text-[#854BFF]" prefetch={false}>
          ABOUT
        </Link>
        <Link href="#EcoSystem" className="hover:text-[#854BFF]" prefetch={false}>
          ECO SYSTEM
        </Link>
        <Link href="#BusinessUtility" className="hover:text-[#854BFF]" prefetch={false}>
          BUSINESS UTILITY
        </Link>
        <Link href="#TOKENOMICS" className="hover:text-[#854BFF]" prefetch={false}>
          TOKENOMICS
        </Link>
        <Link href="#RoadMap" className="hover:text-[#854BFF]" prefetch={false}>
          ROADMAP
        </Link>
        <Link href="#" className="hover:text-[#854BFF]" prefetch={false}>
          WHITEPAPER
        </Link>
      </div>
      {/* <Button className=" hover-slide-right hover-slide-right-purple  bg-white hover:bg-[#854BFF] text-black hover:text-[#ffffff] rounded-full  xl:w-[200px] md:w-[120px] h-14 px-6 py-2" >Buy Now</Button> */}
      {connected ? (
          <Button className="hover-slide-right hover-slide-right-purple bg-white hover:bg-[#854BFF] text-black hover:text-[#ffffff] rounded-full xl:w-[200px] md:w-[120px] h-14 px-6 py-2">
            Buy Now
          </Button>
        ) : (

            <WalletMultiButton
              style={{
                backgroundColor: '#ffffff', 
                color: '#000000', 
                borderRadius: '9999px',
                width: '150px', 
                height: '56px', 
                padding: '16px',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              className="hover:bg-[#854BFF] hover:text-white"
            />
        )}
    </nav>
    </>
  )
}

export default Navbar
function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
