import Footer from "../Footer";
import Navbar from "../Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type AppShellProps = {
    children: React.ReactNode;
};

const AppShell = (props : AppShellProps) => {
    const {children} = props;
    return (
        <main className={poppins.className}>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    );
};

export default AppShell;