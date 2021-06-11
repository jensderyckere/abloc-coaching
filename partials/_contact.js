import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import { Tagline, Title } from '../components';

export default function Contact({ content }) {
    return (
        <section id="contact" className="contact relative z-20 overflow-hidden py-12 md:py-16 lg:py-40 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <Fade
                        delay={250}
                        left
                    >
                        <div>
                            <Tagline
                                text={content.tagline}
                            />
                            <Title 
                                text={content.title}
                                size="md"
                            />
                            <h5 className="subtitle font-primary text-md">
                                {content.subtitle}
                            </h5>

                            <div className="mt-14 lg:mb-0 mb-14">
                                <a href={`telto:${content.phone}`} className="flex items-center font-primary">
                                    <span className="bg-green-500 mr-3 shadow-md text-white text-lg w-8 h-8 flex justify-center items-center rounded-full">
                                        <i className="ri-smartphone-fill"></i>
                                    </span>
                                    { content.phone }
                                </a>
                                <a href={`mailto:${content.email}`} className="flex items-center font-primary mt-4">
                                    <span className="bg-green-500 mr-3 shadow-md text-white text-lg w-8 h-8 flex justify-center items-center rounded-full">
                                        <i class="ri-mail-open-fill"></i>
                                    </span>
                                    { content.email }
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade
                        delay={250}
                        right
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
            </div>
        </section>
    )
}