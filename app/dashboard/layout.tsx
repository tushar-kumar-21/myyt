import Header from "@/app/components/headerItems/Header";
import Sidebar from "@/app/components/sidebarItems/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header />
            <div className='grid grid-cols-[225px,1fr] w-full max-h-[calc(100vh-70px)] overflow-hidden'>
                <Sidebar />
                {children}
            </div>
        </section>
    )
}