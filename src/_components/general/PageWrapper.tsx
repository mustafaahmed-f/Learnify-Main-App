interface PageWrapperProps {
  heading: string;
  children: React.ReactNode;
}

function PageWrapper({
  heading = "Default heading",
  children,
}: PageWrapperProps) {
  return (
    <section className="grow">
      <h1 className="sr-only">{heading}</h1>
      {children}
    </section>
  );
}

export default PageWrapper;
