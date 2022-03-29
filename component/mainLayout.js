import Navbar from "./header";

export default function MainLayout ({children}) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}