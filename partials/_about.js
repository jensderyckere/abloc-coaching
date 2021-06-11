import Fade from 'react-reveal/Fade';
import Image from 'next/image';

import { Tagline, Title, Text, TertiaryButton } from "../components";

export default function About({ content }) {
    return (
        <section id="about" className="about relative z-20 overflow-hidden py-12 md:py-16 lg:py-40 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-flow-row lg:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-14 gap-10">
                    <div className="banner-image">
                        <Fade
                            delay={250}
                            left
                        >
                            <Image
                                src="/assets/person.jpeg"
                                width={500}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                quality={100}
                            />
                        </Fade>
                    </div>
                    <div className="banner-content lg:py-6">
                        <Fade
                            delay={250}
                            top
                        >
                            <Tagline 
                                text={content.tagline}
                            />
                            <Title
                                text={content.title}
                                size="md"
                            />
                            <Text 
                                text={content.text}
                            />
                            <TertiaryButton 
                                text={content.tertiaryButton.text}
                                link={content.tertiaryButton.link}
                                extraClasses="mt-4"
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
};
