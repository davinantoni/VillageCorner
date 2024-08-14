import Footer from "../Footer";
import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode;
};

const AppShell = (props : AppShellProps) => {
    const {children} = props;
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default AppShell;