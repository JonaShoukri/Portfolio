import { HERO_CONTENT_EN, HERO_CONTENT_FR } from "../constants/index.js";
import profilePic from "../assets/ProfilePic.jpg";
import { motion } from "framer-motion";
import { ChakraProvider, Stack } from '@chakra-ui/react';
import cvEn from '../assets/Jonas Shoukri SE (EN).pdf';
import cvFr from '../assets/Jonas Shoukri SE (FR).pdf';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const downloadCV = (language) => {
    const link = document.createElement('a');
    link.href = language === 'en' ? cvEn : cvFr;
    link.download = language === 'en' ? 'Jonas Shoukri SE (EN).pdf' : 'Jonas Shoukri SE (FR).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Hero = ({ language, toggleLanguage }) => {
    const HERO_CONTENT = language === 'en' ? HERO_CONTENT_EN : HERO_CONTENT_FR; // Conditional content

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0.2)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Jonas Shoukri
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            {language === 'en' ? 'Systems Designer' : 'Concepteur de Systèmes'}
                        </motion.span>
                        <motion.p
                            variants={container(0.8)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT} {/* Render content based on language */}
                        </motion.p>
                        <ChakraProvider>
                            <Stack direction='row' spacing={4} align='center'>
                                <motion.button
                                    variants={container(1.1)}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 py-2 px-4 rounded-lg font-semibold text-lg text-neutral-100 mb-7"
                                    onClick={toggleLanguage}
                                >
                                    {language === 'en' ? 'Français' : 'English'}
                                </motion.button>
                                <motion.button
                                    variants={container(1.1)}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 py-2 px-4 rounded-lg font-semibold text-lg text-neutral-100 mb-7"
                                    onClick={() => downloadCV(language)}
                                >
                                    {language === 'en' ? 'Download Resume' : 'Télécharger mon CV'}
                                </motion.button>
                            </Stack>
                        </ChakraProvider>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img initial={{x: 100, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 1, delay: 1}}
                                    src={profilePic} alt="Jonas Shoukri" style={{ borderRadius: '20px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
