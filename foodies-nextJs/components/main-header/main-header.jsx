'use client';

import Link from "next/link";
import Image from "next/image";

import logoImg from '../../assets/logo.png';
import classes from "./main-header.module.css";
import {MainHeaderBackground} from "@/components/main-header/main-header-background";
import {usePathname} from "next/navigation";

export function Header() {
    const path = usePathname();

    return (<>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="logo" priority/>
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li><Link href="/meals" className={path.startsWith('/meals') ? classes.active : ''}>Meals</Link>
                        </li>
                        <li><Link href="/community"
                                  className={path.startsWith('/community') ? classes.active : ''}>Community</Link></li>
                    </ul>
                </nav>
            </header>
        </>

    );
}