import { Sidebar } from "@/components/Sidebar";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default DocsLayout;
