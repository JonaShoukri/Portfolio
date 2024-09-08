import {EDUCATION} from "../constants/index.js";
import {motion} from "framer-motion";

const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Education</h2>
            <div>
                {EDUCATION.map((experience, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 1}}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">
                                {experience.year}
                            </p>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{duration: 1}}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                            </h6>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;