import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import Skill from './Skill'
import Experience from "./Experience";

export default function Skills() {
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
    return experience.map((experience) => {
      return (
        <Experience
          experience={experience}
          key={experience._id}
        />
      );
    });
  }

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function getSkills() {
      axios.get('/get-types-with-skills').then((res) => {
        if (!res.status === 200) {
          const message = `An error occured: ${res.statusText}`;
          window.alert(message);
          return;
        }

        setSkills(res.data);
      })


    }

    getSkills();

    return;
  }, [skills.length]);

  function SkillsList() {
    return skills.map((type, i) => {
      return (
        <div className="p-4" key={i}>
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
        </div>
      );
    });
  }
  if (loading) {
    return (<div>
      <Loading />
    </div>)
  }
  return (
    <div className="max-w-7xl mx-auto">
      {SkillsList()}
      <div className="p-4 mt-2">
        <strong>Experience</strong>
        <hr></hr>
        <div className="grid grid-cols-12 gap-4">
          {ExperienceList()}
        </div>
      </div>
    </div>
  );
}
