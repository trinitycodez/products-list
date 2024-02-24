import Footer from "@/components/footer"
import Header from "@/components/header"

const PageLayout = ({ children, params }: { children: React.ReactNode, params: {slug: string[]} }) => {

  return (
    <>
        <Header isRoute={params.slug[1]} />
        <main className="app-container flex min-h-screen flex-col items-center justify-center">{children}</main>
        <Footer />
    </>
  )
}

export default PageLayout