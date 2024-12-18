import axios from "axios";
import React, { useEffect, useState } from "react";
import Experience from "./Experience";
import Loading from "../../Loading";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Journey() {
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);

    // This method fetches the records from the database.
    useEffect(() => {
        function getExperience() {
            axios.get(`/get-all-experience/`).then(res => {
                if (!res.data) {
                    const message = `An error occured: ${res.statusText}`;
                    window.alert(message);
                    return;
                }
                setExperience(res.data);
                setLoading(false);
            })
        }

        getExperience();

        return;
    }, [experience.length]);

    function ExperienceList() {
        return experience.map((experience, index) => {
            return (
                <Experience
                    experience={experience}
                    order={index}
                    key={experience._id}
                />
            );
        });
    }


    if (loading) {
        return (<div>
            <Loading />
        </div>)
    }
    return (
        <div id="experience" className="w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center my-20">
            <div className=" mt-2 w-full">
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
                    <div className="mb-16">
                        <strong className="text-yellow-500">MY JOURNEY</strong>
                        <hr></hr>
                        <div className="text-5xl font-black">Work Experience</div>
                    </div>
                </AnimationOnScroll >
                <div className="flex flex-col w-full">
                    {ExperienceList()}
                </div>
            </div>
        </div>
    );
}
