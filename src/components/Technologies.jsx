import {RiReactjsLine} from "react-icons/ri";
import { SiCsharp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCsharp className="text-7xl text-purple-700"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiKubernetes className="text-7xl text-blue-600"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDocker className="text-7xl text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <AiFillGithub className="text-7xl text-white-400"/>
                </div>
            </div>
        </div>
    );
}

export default Technologies;