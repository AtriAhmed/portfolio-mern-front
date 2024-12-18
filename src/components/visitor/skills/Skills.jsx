import axios from "axios";
import React, { useEffect, useState } from "react";
import Skill from './Skill'
import { AnimationOnScroll } from "react-animation-on-scroll";
import Loading from "../../Loading";

export default function Skills() {
  const [loading, setLoading] = useState(true);

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function getSkills() {
      axios.get('/get-types-with-skills').then((res) => {
        if (!res.status === 200) {
          const message = `An error occured: ${res.statusText}`;
          window.alert(message);
          return;
        }
        setLoading(false);
        setSkills(res.data);
      })


    }

    getSkills();

    return;
  }, [skills.length]);

  function SkillsList() {
    return skills.map((type, i) => {
      return (
        <AnimationOnScroll animateIn="animate__bounceInUp" duration={2} className="p-4" key={i}>
          <strong>{type.name}</strong>
          <hr></hr>
          <div className="grid grid-cols-12 gap-4">
            {type.skills.map((skill) => {
              return (
                <Skill
                  skill={skill}
                  key={skill._id}
                />
              )
            })}
          </div>
        </AnimationOnScroll>
      );
    });
  }
  if (loading) {
    return (<div>
      <Loading />
    </div>)
  }
  return (
    <div id="skills" className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center w-full my-20">
      <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
        <div className="mb-16">
          <strong className="text-yellow-500">My Expertise</strong>
          <hr></hr>
          <div className="text-5xl font-black">Skills</div>
        </div>
      </AnimationOnScroll >

      {SkillsList()}

    </div>
  );
}
