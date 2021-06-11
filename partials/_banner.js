import Fade from 'react-reveal/Fade';
import { Title, Subtitle, PrimaryButton, SecondaryButton } from "../components";

export default function Banner({ title, subtitle, primaryButton, secondaryButton }) {
    return (
        <section className="banner overflow-hidden min-h-screen relative h-full">
            <div className="container px-4 pt-28 md:pt-48 mx-auto">
                <Fade 
                    left
                >
                    <Title 
                        text={title} 
                        size="xl"
                    />
                </Fade>
                <Fade 
                    left 
                    delay={200}
                >
                    <Subtitle 
                        text={subtitle} 
                    />
                </Fade>
                <Fade
                    delay={750}
                >
                    <div 
                        className="flex mt-8"
                    >
                        <PrimaryButton 
                            text={primaryButton.text} 
                            link={primaryButton.link}
                            extraClasses="mr-4"
                        />
                        <SecondaryButton 
                            text={secondaryButton.text} 
                            link={secondaryButton.link}
                        />
                    </div>
                </Fade>

                <Fade
                    right
                    delay={750}
                >
                    <div className="banner-circle bg-green-500 fixed rounded-full lg:flex hidden"></div>
                </Fade>

                <Fade
                    bottom
                    delay={750}
                >
                    <div className="banner-circle bg-green-500 absolute rounded-full lg:hidden flex"></div>
                </Fade>
            </div>
        </section>
    )
};