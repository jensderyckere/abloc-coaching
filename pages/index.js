import { About, Banner, Contact, Header, PageHeading, Services, Footer } from "../partials";
import { Main } from "../components";

// Content
import * as Content from "../utils/content/nl.json";

export default function Home() {
  return (
      <>
        {/* Some heading tags */}
        <PageHeading title="A'Bloc Coaching" />

        <Main>
            <Header />
            <Banner 
                title={Content.banner.title} 
                subtitle={Content.banner.subtitle}
                primaryButton={Content.banner.primaryButton}
                secondaryButton={Content.banner.secondaryButton}
            />
            <About
                content={Content.about}
            />
            <Services 
                content={Content.services}
            />
            <Contact 
                content={Content.contact}
            />
            <Footer />
        </Main>
      </>
  )
}
