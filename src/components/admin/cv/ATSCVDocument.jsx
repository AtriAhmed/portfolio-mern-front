import React, { useEffect, useRef, useState } from 'react';
import { Page, View, Document, Text, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';

export default function ATSCVDocument() {

    const styles = StyleSheet.create({
        page: {
            fontFamily: "Montserrat",
            fontSize: '12pt',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '8px'
        },
        title: {
            fontSize: '16pt',
            fontWeight: '900',
            marginBottom: '6px',
        },
        subTitle: {
            fontSize: '12pt',
            fontWeight: '600',
        },
        section: {
            marginBottom: '8px',
        },
        content: {
            fontSize: '12pt',
        },
        marginBottom: {
            fontSize: '12pt',
            marginBottom: '6px',
        },
        item: {
            marginBottom: '6px',
        },
    });

    const [experience, setExperience] = useState([]);
    const [works, setWorks] = useState([]);
    const [contact, setContact] = useState({});
    const [education, setEducation] = useState({});
    const [educationLoading, setEducationLoading] = useState(true);
    const [workLoading, setWorkLoading] = useState(true);
    const [experienceLoading, setExperienceLoading] = useState(true);
    const [skillsLoading, setSkillsLoading] = useState(true);
    const [contactLoading, setContactLoading] = useState(true);

    const [notShownExperiences, setNotShownExperiences] = useState([]);

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
                const array = res.data.filter(experience => !experience.showInCV)
                setNotShownExperiences(array)
                setExperienceLoading(false);
            })
        }

        getExperience();

        return;
    }, []);

    useEffect(() => {
        function getContact() {
            axios.get(`/get-contact/`).then(res => {
                if (!res.data) {
                    const message = `An error occured: ${res.statusText}`;
                    window.alert(message);
                    return;
                }
                setContact(res.data);
                setContactLoading(false);
            })
        }

        getContact();

        return;
    }, []);

    useEffect(() => {
        function getEducation() {
            axios.get(`/get-education/`).then(res => {
                if (!res.data) {
                    const message = `An error occured: ${res.statusText}`;
                    window.alert(message);
                    return;
                }
                setEducation(res.data);
                setEducationLoading(false);
            })
        }

        getEducation();

        return;
    }, []);

    const [notShownWorks, setNotShownWorks] = useState([]);

    useEffect(() => {
        async function getWorks() {
            axios.get(`/get-all-work/`).then(res => {
                if (!res.data) {
                    const message = `An error occured: ${res.statusText}`;
                    window.alert(message);
                    return;
                }
                setWorks(res.data);
                const array = res.data.filter(work => !work.showInCV)
                setNotShownWorks(array)
                setWorkLoading(false)
            })
        }

        getWorks();

        return;
    }, []);


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
                setSkillsLoading(false)
            })
        }

        getSkills();

        return;
    }, []);

    function SkillsList() {
        return skills.map((type, i) => {
            return (
                <View key={i} style={styles.item}>
                    {<Text style={styles.subTitle}>{type.name}</Text>}
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '4px' }}>
                        {type.skills.map((skill) => {
                            return (
                                <Text key={skill._id} style={styles.content}>• {skill.name}</Text>
                            )
                        })}
                    </View>
                </View>
            );
        });
    }

    function ExperienceList() {
        return experience.filter(experience => experience.showInCV).map((experience) => {
            return (
                <View key={experience._id} style={styles.item}>
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.subTitle}>{experience.name} : </Text> <Text style={styles.content}>{experience.position} ({experience.date})
                        </Text>
                    </View>
                    <Text style={styles.content}>{experience.description}</Text>
                </View>
            );
        });
    }

    function WorksList() {
        return works.filter(work => work.showInCV).map((work) => {
            return (
                <View key={work._id} style={styles.item}>
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.subTitle} >{work.name} :</Text><Text style={styles.content}> {work.description} ({work.technologies})</Text>
                    </View>

                    <Text style={styles.content} >{work.link}</Text>
                </View>
            );
        });
    }

    function Education() {
        return <>
            <Text style={styles.content}>{education.certificate} In {education.institute}</Text>
            <Text style={styles.content}>{education.location} ({education.date})</Text>
        </>

    }


    const ref = useRef(null)


    // Create Document Component
    const MyDocument = () => (
        <Document ref={ref}>
            <Page size="A4" style={styles.page}>

                <View >
                    <Text style={styles.title}>{contact?.name + " " + contact?.lastname}</Text>
                    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "4px" }}>
                        <Text >• Title: {contact.title}</Text>
                        <Text >• Email: {contact.email}</Text>
                        <Text >• Phone: {contact.phone}</Text>
                        <Text >• Location: {contact.location}</Text>
                        <Text >• Github: https://github.com/AtriAhmed</Text>
                        <Text >• Linkdedin: https://www.linkedin.com/in/ahmed-atri-5564601b2</Text>
                        <Text >• Website: www.ahmedatri.com</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.section}>
                        <Text style={styles.title}>Education</Text>
                        {Education()}
                    </View>

                    <View >
                        <Text style={styles.title}>Skills</Text>
                        {SkillsList()}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Summary</Text>
                    <Text style={styles.content}> I am Ahmed Atri, a software engineering specializing in full-stack web development. With freelance experience, I deliver successful projects on time and within budget. I prioritize data security and create responsive designs. Proficient in React and ExpressJS, I adapt quickly to new technologies. Currently seeking a Web developer position.</Text>

                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Freelance Experience</Text>
                    {WorksList()}
                    <Text>Explore {notShownWorks.length} more {notShownWorks.length == 1 ? "project" : "projects"} at ahmedatri.com</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Professional Experience</Text>
                    {ExperienceList()}
                    <Text>Explore {notShownExperiences.length} more at ahmedatri.com</Text>
                </View>


            </Page>
        </Document>
    );

    if (experienceLoading || workLoading || contactLoading || skillsLoading || educationLoading) {
        return (
            <Document>
                <Page size="A4" style={styles.page} >

                </Page>
            </Document>
        )
    }

    return <>
        <MyDocument />
    </>
} 