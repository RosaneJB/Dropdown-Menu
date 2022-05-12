import { UserProfile } from "./components/userProfile"
import './style.css'

type LayoutProps = {
    children:JSX.Element
}

export const Layout = ({children}:LayoutProps) => {
    return (
        <>
        <header>
             <nav></nav>
            <UserProfile />
        </header>
        <main>
        {children}
        </main>
        <footer>Meu footer</footer>
        </>
    )
}