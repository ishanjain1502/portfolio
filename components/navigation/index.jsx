"use client";

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import twitterIcon from "../../public/twitter.svg"
import githubIcon from "../../public/github.svg"
import linkedinIcon from "../../public/linkedin.svg"

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsScrolledDown(true);
            } else {
                setIsScrolledDown(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const sections = [
        { name: "About", url: "/about" },
        { name: "Work", url: "/work" },
        { name: "Contact", url: "/contact" },
        // { name: "Random", url: "/random" },
    ]

    const socials = [
        { name: "Twitter", icon: twitterIcon, url: "https://twitter.com/ishanjain_" },
        { name: "Github", icon: githubIcon, url: "https://github.com/ishanjain1502" },
        { name: "LinkedIn", icon: linkedinIcon, url: "https://www.linkedin.com/in/hey-ishan/" },
    ]

    return (
        <nav onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsOpen(!isOpen);
        }} className={`bg-black text-white mx-auto px-2 sticky top-2 transition-all duration-500 rounded-3xl backdrop-filter backdrop-blur-lg border-b border-gray-200 bg-opacity-20 ${isOpen ? 'w-11/12' : 'w-3/5'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
            <div className="flex items-center justify-center h-8">
              <div  onClick={(event)=> {
                        event.preventDefault();
                        event.stopPropagation();
                        // only trigger this when, mobile screen
                        if(window.innerWidth < 768) {
                            setIsOpen(false)
                        }
                    }} className="text-center flex-shrink-0">
                <Link href="/">
                    Ishan
                </Link>
              </div>
              <div className="hidden md:flex">
                <div className="ml-10 flex items-baseline space-x-4">
                  {sections.map((section, index) => (
                    <Link key={index} href={section.url} className="hover:bg-gradient-to-r from-red-500 to-blue-500 px-3 py-2 rounded-md">
                        {section.name}
                    </Link>
                    ))}
                </div>
                {/* <div className="ml-10 flex items-baseline space-x-4">
                  {socials.map((social, index) => (
                        <Link href={social.url}>
                            <Image src={social.icon} width={25} height={25} alt={social.name} />    
                        </Link> 
                    ))}
                </div> */}
              </div>

            </div>
          </div>
    
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
            
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 grid justify-items-center">
                {sections.map((section, index) => (
                    <Link onClick={()=> {
                        setIsOpen(false)
                    }} key={index} href={section.url} className="hover:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium">
                        {section.name}
                    </Link>
                ))}
                {/* <div className='flex gap-2 align-middle' >
                    {socials.map((social, index) => (
                        <Link onClick={()=> {
                            setIsOpen(false)
                        }}  key={index}  href={social.url} target='_blank' className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                <Image src={social.icon} width="25px" alt={social.name} />
                        </Link>
                    ))}
                </div> */}
            </div>
          </div>
        </nav>
      );
}

// const Navigation = () => {

//     const socials = [
//         { name: "Twitter", icon: twitterIcon, url: "https://twitter.com/ishanjain_" },
//         { name: "Github", icon: githubIcon, url: "https://github.com/ishanjain1502" },
//         { name: "LinkedIn", icon: linkedinIcon, url: "https://www.linkedin.com/in/hey-ishan/" },
//     ]

//     return(

//         // <NavigationMenu>
//         // <NavigationMenuList>
//         //     <NavigationMenuItem>
//         //         <Link href="/" legacyBehavior passHref>
//         //             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//         //             Ishan
//         //             </NavigationMenuLink>
//         //         </Link>
//         //     </NavigationMenuItem>
//         //     <NavigationMenuItem>
//         //         <Link href="/about" legacyBehavior passHref>
//         //             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//         //             About
//         //             </NavigationMenuLink>
//         //         </Link>
//         //     </NavigationMenuItem>
//         //     <NavigationMenuItem>
//         //         <ul className='grid-cols-3 p-6 gap-2' >
//         //             {socials.map((social, index) => (
//         //                 <li key={index}>
//         //                     <a href={social.url} target="_blank" rel="noreferrer">
//         //                         <Image src={social.icon} width={45} height={45} alt={social.name} />
//         //                     </a>
//         //                 </li>
//         //             ))    
//         //             }
//         //         </ul>
//         //     </NavigationMenuItem>
//         // </NavigationMenuList>
//         // </NavigationMenu>

        
//     )
// }

export default Navigation