import Link from "next/link";

export const Menu = () => {
    return (
        <ul style={{ listStyleType: 'none', display: "flex" } }>
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'/users'}>users</Link></li>
        </ul>
    );
};