import MobileNav from "./mobileNav";
import TopNavbar from "./topNavbar";
import Sidebar from "./sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-bg-primary text-text-primary">
      
      <header className="h-14 border-b border-[var(--text-muted)] flex items-center px-4 shrink-0">
        <TopNavbar />
      </header>
    
      <div className="flex flex-1 overflow-hidden">
        
        <aside className="hidden md:flex w-64 border-r border-[var(--text-muted)] shrink-0">
          <Sidebar />
        </aside>

        <div className="flex flex-col flex-1">
          
          <main className="flex-1 overflow-auto p-4">
            {children}
          </main>

          <nav className="md:hidden h-14 border-t border-[var(--text-muted)] shrink-0">
            <MobileNav />
          </nav>

        </div>
      </div>
    </div>
  );
}