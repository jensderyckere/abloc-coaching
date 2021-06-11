import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import { Tagline, Title, Text } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StickyContainer, Sticky } from 'react-sticky';

export default function Services({ content }) {
    return (
        <section id="services" className="services relative z-20 overflow-hidden py-12 md:py-16 lg:py-40 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 mb-20">
                    <Fade
                        delay={250}
                        bottom
                    >
                        <div>
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
                        </div>
                    </Fade>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-24">
                    {
                        content.cards.map((card, index) => {
                            return (
                                <Fade
                                    delay={250 * index}
                                    bottom
                                    key={index}
                                >
                                    <div className="service-card shadow-md rounded-md bg-gray-50 py-8 px-14">
                                        <div className="flex justify-center mb-10">
                                            <div className="icon rounded-full shadow-md flex justify-center items-center w-28 h-28 text-white text-5xl bg-blue-500">
                                                <i className={card.icon}></i>
                                            </div>
                                        </div>
                                        <h6 className="font-primary font-bold lg:text-xl md:text-lg text-md text-center">
                                            {card.title}
                                        </h6>

                                        <Text 
                                            text={card.text}
                                            extraClasses="text-center"
                                        />
                                    </div>
                                </Fade>
                            )
                        })
                    }
                </div>
                <div className="grid lg:grid-cols-2 gap-20 grid-flow-row-dense grid-cols-1 mt-40">
                    <div className="merch-items lg:order-1 order-2">
                        {
                            content.merch.products.map((product, index) => {
                                return (
                                    <Fade
                                        delay={250}
                                        left
                                        key={index}
                                    >
                                        <div className="product-card overflow-hidden rounded-lg shadow-md bg-gray-50 mb-4">
                                            <div className="product-images">
                                                <Swiper
                                                    loop={true}
                                                    direction="horizontal"
                                                    className="h-96"
                                                    autoplay={{
                                                        delay: 3000,
                                                        disableOnInteraction: true
                                                    }}
                                                >
                                                    {
                                                        product.images.map((img, index) => {
                                                            return <SwiperSlide key={index}>
                                                                <Image
                                                                    src={`/assets/products/${img}`}
                                                                    layout="fill"
                                                                    objectFit="cover"
                                                                    quality={100}
                                                                />
                                                            </SwiperSlide>
                                                        })
                                                    }
                                                </Swiper>
                                            </div>
                                            <div className="product-info py-5 px-6 grid grid-cols-2 gap-2 items-center">
                                                <div>
                                                    <p className="text-green-500 uppercase font-primary font-bold text-xs tracking-widest">CLOTHING</p>
                                                    <h6 className="font-primary font-bold text-lg">
                                                        { product.title }
                                                    </h6>
                                                </div>

                                                <div className="flex w-full justify-end">
                                                    <p className="font-primary text-lg">{ product.price }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                )
                            })
                        }
                    </div>
                    <div className="merch-content lg:order-2 order-1 h-full">
                        <StickyContainer className="h-full">
                            <Sticky>{({ style }) => (
                                    <div className="pt-8" style={style}>
                                        <Fade
                                            delay={250}
                                            right
                                        >
                                            <Tagline
                                                text={content.merch.tagline}
                                            />
                                            <Title 
                                                text={content.merch.title}
                                                size="md"
                                            />
                                            <Text
                                                text={content.merch.text}
                                            />
                                        </Fade>
                                    </div>
                            )}
                            </Sticky>
                        </StickyContainer>
                    </div>
                </div>
            </div>
        </section>
    )
};