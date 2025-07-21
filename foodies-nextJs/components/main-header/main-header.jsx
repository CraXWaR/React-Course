import Link from "next/link";
import Image from "next/image";

import logoImg from '../../assets/logo.png';
import classes from "./main-header.module.css";
import {MainHeaderBackground} from "@/components/main-header/main-header-background";

export function Header() {
    return (<>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link href="/foodies-nextJs/public" className={classes.logo}>
                    <Image src={logoImg} alt="logo" priority/>
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li><Link href="/meals" className={classes.link}>Meals</Link></li>
                        <li><Link href="/community" className={classes.link}>Community</Link></li>
                    </ul>
                </nav>
            </header>
        </>

    );
}