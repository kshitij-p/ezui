import { Sidebar } from "@/components/Sidebar";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-6 py-8 md:grid md:grid-cols-[190px_minmax(0,1fr)] xl:md:grid-cols-[240px_minmax(0,1fr)] xl:gap-6">
      <Sidebar />
      {children}
    </div>
  );
};

export default DocsLayout;
