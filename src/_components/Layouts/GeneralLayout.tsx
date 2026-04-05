import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-background flex grow flex-col">{children}</main>
      <Footer />
    </>
  );
}

export default GeneralLayout;
