import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeaderElden from '@assets/elden-ring-new-header.webp';
import EldenLogo from '@assets/eldenring_new.webp';
import styles from '../styles/Elden.module.css'
import { blurData } from 'utils/blur';
import {  useLayoutEffect, useMemo, useRef, useState } from 'react';

const EldenRing: NextPage = () => {
    const firstElement = useRef<HTMLDivElement>(null);
    const secondElement = useRef<HTMLDivElement>(null);
    const thirdElement = useRef<HTMLDivElement>(null);
    const refElements = useMemo(() => {
        return [
            firstElement,
            secondElement,
            thirdElement,
        ]
    }, []);
    useLayoutEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry, index) => {
                if (entry.isIntersecting){
                    observer.unobserve(entry.target)
                }
                if (entry.target.id === '2') {
                    entry.target.classList.toggle('slide-in-left',entry.isIntersecting)
                    return;
                } 
                entry.target.classList.toggle('slide-in-right',entry.isIntersecting)
            })
        }

       const observer = new IntersectionObserver(callback);
       refElements.forEach((elem) => {
        if (elem.current) {
          observer.observe(elem.current)
        }
       })
    }, [refElements])
    
    const [first, setfirst] = useState<boolean>(false)
    return (
        <div className={styles.container}>
        <Head>
            <title>Elden Ring</title>
            <meta name="description" content="Elden Ring" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={styles['banner-top']}>
            <Image 
                src={HeaderElden}
                alt="elden-header"
                layout='responsive'
                objectFit='contain'
            />
            
        </section>
        <section className={styles['section']} style={{marginTop:"-1rem"}}>
            <div className={`${styles['section__info-logo']} fade-in-fwd`}>
                <Image 
                    src={EldenLogo}
                    placeholder="blur"
                    alt="elden-Logo"
                />
            </div>
            <div className={`${styles["section__info"]} scale-in-ver-center`}>
                <h1 style={{textAlign:'center', margin:'1em auto'}}>
                    The Golden Order has been broken.
                </h1>
                <div style={{marginTop:"2em"}}>
                    <p>
                        Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.
                    </p>
                    <p>
                        In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered
                    </p>
                    <p>
                    Marik&apos;s offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.
                    </p>
                    <p>
                        And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.
                    </p>
                    <p style={{marginTop:"5em"}}> 

                        And become the Elden Lord.
                    </p>
                </div>
            </div>
        </section>
        <section className={`${styles['section']} ${styles['section--bg']}`}>
            <h1>
                Key Features
            </h1>
            <div className={styles["section__key-features"]}>
                <div ref={firstElement} className={`${styles[`section__feature`]}`}>
                    <div style={{position:"relative"}}>
                        <Image 
                            src="https://p325k7wa.twic.pics/high/elden-ring/elden-ring/00-page-setup/Elden-Ring-KF01.jpg?twic=v1/cover=1920/step=10/quality=80"
                            width={500}
                            height={300}
                            placeholder="blur"
                            alt="elden-Logo"
                            blurDataURL={blurData}
                        />
                        
                    </div>
                <div className={styles['section__feature-detail']}>
                    <h2 >
                                A NEW FANTASY WORLD
                    </h2>
                    <p>
                        Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, 
                        creator of the influential DARK SOULS video game series, and George R. R. Martin, 
                        author of The New York Times best-selling fantasy series, A Song of Ice and Fire. 
                        </p>
                        <p>
                        Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, 
                        characters with their own unique motivations for helping or hindering your progress, and fearsome creatures. . 
                        </p>
                </div>
                </div>
                <div ref={secondElement} className={`${styles[`section__feature`]} `}id="2">
                <div style={{position:"relative"}}>
                        <Image 
                            src="https://p325k7wa.twic.pics/high/elden-ring/elden-ring/00-page-setup/Elden-Ring-KF02.jpg?twic=v1/cover=1920/step=10/quality=80"
                            width={500}
                            height={300}
                            placeholder="blur"
                            alt="elden-Logo"
                            blurDataURL={blurData}
                        />
                    </div>
                    <div className={styles['section__feature-detail']}>
                        <h2>
                                    WORLD EXPLORATION IN THE LANDS BETWEEN
                        </h2>
                        <p>
                            ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly.
                        </p>
                        <p>
                        Traverse the breathtaking world on foot or on horseback, alone or online with other players, 
                        and fully immerse yourself in the grassy plains, suffocating swamps, 
                        spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title. 
                        </p>
                    </div>
                </div>
                <div ref={thirdElement} className={`${styles[`section__feature`]}`}>
                    <div style={{position:"relative"}}>
                        <Image 
                            src="https://p325k7wa.twic.pics/high/elden-ring/elden-ring/00-page-setup/Elden-Ring-KF03.jpg?twic=v1/cover=1920/step=10/quality=80"
                            width={500}
                            height={300}
                            placeholder="blur"
                            alt="elden-Logo"
                            blurDataURL={blurData}
                        />
                    </div>
                <div className={styles['section__feature-detail']}>
                    <h2>
                                    GENRE-DEFINING GAMEPLAY
                    </h2>
                    <p>
                        Create your character in FromSoftware&apos;s refined action-RPG and define your playstyle by experimenting with a wide variety of weapons,
                        magical abilities, and skills found throughout the world.
                        </p>
                        <p>
                        Charge into battle, pick off enemies one-by-one using stealth, 
                        or even call upon allies for aid. Many options are at your disposal as you decide how to approach exploration and combat.  
                        </p>
                </div>
                </div>
            </div>
        </section>

        </div>
    )
}

export default EldenRing;
