import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import Skill from './Skill'

const Experience = (props) => (
  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <div className="p-4">
          <strong style={{fontSize:'18px'}}>{props.experience.name}</strong><br/>
            <span style={{fontSize:'14px'}}>{props.experience.position}</span><br/>
            <span style={{fontSize:'12px'}}>{props.experience.date}</span><br/>
            <span style={{fontSize:'16px'}}>{props.experience.description}</span><br/>
          </div>
        </div>
);

export default function Skills() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

    // This method fetches the records from the database.
    useEffect(() => {
      function getExperience() {
        axios.get(`/get-all-experience/`).then(res=>{
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
        axios.get('/get-all-skills').then((res)=>{
          if (!res.status == 200) {
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
      return skills.map((skill,i) => {
        console.log(skill.level + "/" + i)
        return (
          <Skill
            skill={skill}
            key={skill._id}
          />
        );
      });
    }
    if(loading){
      return (<div>
        <Loading/>
      </div>)
    }
  return (
    <div className="container">
      <div className=" p-4">
        <strong>Skills</strong>
        <hr></hr>
        <div className="row">
        {SkillsList()}
        </div>
      </div>
      <div className=" p-4 mt-2">
        <strong>Experience</strong>
        <hr></hr>
        <div className="row">
        {ExperienceList()}   
        </div>
      </div>
    </div>
  );
}
