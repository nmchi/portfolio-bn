"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { TypingText } from "../TextStyles/CustomText";
import { projectsData } from "../../constants";

const Projects = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section className='sm:pl-16 pl-6 sm:py-16 xs:py-8 px-6 py-12' id="project">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                className='w-full 2xl:max-w-[1280px] mx-auto flex flex-col'>

                <TypingText title="| My Projects" textStyles="text-center" />

                <motion.div className="flex flex-row justify-center items-center py-6 text-white">
                    <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                    <ProjectTag onClick={handleTagChange} name="NextJS" isSelected={tag === "NextJS"} />
                    <ProjectTag onClick={handleTagChange} name="WordPress" isSelected={tag === "WordPress"} />
                </motion.div>

                <motion.div>
                    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {filteredProjects.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;