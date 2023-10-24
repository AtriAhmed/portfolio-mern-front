import React, { useEffect, useRef, useState } from 'react';
import { Page, View, Document, Text, StyleSheet, Font } from '@react-pdf/renderer';
import axios from 'axios';

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf',
        },
        {
            src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Uw-Y3tcoqK5.ttf',
            fontWeight: '100',
        },
        {
            src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr6Ew-Y3tcoqK5.ttf',
            fontWeight: '200',
        },
        {
            src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-Y3tcoqK5.ttf',
            fontWeight: '300',
        },
        {
            src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf',
            fontWeight: '600',
        },
        {
            src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-Y3tcoqK5.ttf',
            fontWeight: '700',
        },
        {
            src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-Y3tcoqK5.ttf',
            fontWeight: '800',
        },
        {
            src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC70w-Y3tcoqK5.ttf',
            fontWeight: '900',
        }
    ],
});

export default function Documentt() {

    const styles = StyleSheet.create({
        page: {
            fontFamily: "Montserrat",
            fontSize: '12pt',
            display: 'flex',
            flexDirection: 'row',
            gap: '8px'
        },
        leftCol: {
            flex: '2',
        },
        rightCol: {
            flex: '3',
            padding: '16px'
        },
        title: {
            fontSize: '16pt',
            fontWeight: '900',
            marginBottom: '8px',
        },
        subTitle: {
            fontSize: '12pt',
            fontWeight: '600',
        },
        section: {
            marginBottom: '12px',
        },
        gray: {
            backgroundColor: '#f8f8f8',
            height: '100%',
            padding: '16px',
        },
        dark: {
            paddingBottom: '10pt',
            backgroundColor: 'black',
            color: 'white',
            padding: '16px'
        },
        content: {
            fontSize: '12pt',
        },
        marginBottom: {
            fontSize: '12pt',
            marginBottom: '8px',
        },
        item: {
            marginBottom: '8px',
        },
    });

    const [experience, setExperience] = useState([]);
    const [works, setWorks] = useState([]);
    const [contact, setContact] = useState({});
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
                const array =  res.data.filter(experience=>!experience.showInCV)
                setNotShownExperiences(array)
                setExperienceLoading(false);
            })
        }
        
        getExperience();
        
        return;
    }, [experience.length]);
    
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
    }, [experience.length]);
    
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
                const array =  res.data.filter(work=>!work.showInCV)
            setNotShownWorks(array)
                setWorkLoading(false)
            })
        }
        
        getWorks();
        
        return;
    }, [works.length]);
    

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
    }, [skills.length]);

    function SkillsList() {
        return skills.map((type, i) => {
            return (
                <View key={i} style={styles.item}>
                    {type._id == "Skills" ? <Text style={styles.subTitle}>Tech Skills</Text> : <Text style={styles.subTitle}>{type._id}</Text>}
                    {type.records.map((skill) => {
                        return (
                            <Text key={skill._id} style={styles.content}>{skill.name}</Text>
                        )
                    })}
                </View>
            );
        });
    }

    function ExperienceList() {
        return experience.filter(experience=>experience.showInCV).map((experience) => {
            return (
                <View key={experience._id} style={styles.item}>
                    <Text style={styles.subTitle}>{experience.name}</Text>
                    <Text style={styles.content}>{experience.position}</Text>
                    <Text style={styles.content}>{experience.date}</Text>
                    <Text style={styles.content}>{experience.description}</Text>
                </View>
            );
        });
    }

    function WorksList() {
        return works.filter(work=>work.showInCV).map((work) => {
            return (
                <View key={work._id} style={styles.item}>
                    <Text style={styles.subTitle} >{work.name}</Text>
                    <Text style={styles.content} >{work.description}</Text>
                    <Text style={styles.content} >{work.technologies}</Text>
                    <Text style={styles.content} >{work.link}</Text>
                </View>
            );
        });
    }


    const ref = useRef(null)


    // Create Document Component
    const MyDocument = () => (
        <Document ref={ref}>
            <Page size="A4" style={styles.page}>
                <View style={styles.leftCol}>
                    <View style={styles.dark}>
                        <Text style={styles.title}>{contact?.name + " " + contact?.lastname}</Text>
                        <Text style={styles.marginBottom}>{contact.title}</Text>
                        <Text style={styles.marginBottom}>{contact.email}</Text>
                        <Text style={styles.marginBottom}>{contact.phone}</Text>
                        <Text style={styles.marginBottom}>{contact.location}</Text>
                        <Text style={styles.marginBottom}>https://github.com/AtriAhmed</Text>
                        <Text style={styles.marginBottom}>https://www.linkedin.com/in/{'\n'}ahmed-atri-5564601b2</Text>
                        <Text style={{ ...styles.marginBottom, marginTop: '4px' }}>www.ahmedatri.com</Text>
                    </View>

                    <View style={styles.gray}>
                        <View style={styles.section}>
                            <Text style={styles.title}>Education</Text>
                            <Text style={styles.content}>Software engineering</Text>
                            <Text style={styles.content}>Institute of Computer Science and Multimedia Studies of Sfax</Text>
                            <Text style={styles.content}>september 2021 - Present</Text>
                            <Text style={styles.content}>Sfax, Tunisia</Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.title}>Skills</Text>
                            {SkillsList()}
                        </View>
                    </View>
                </View>

                <View style={styles.rightCol}>
                    <View style={styles.section}>
                        <Text style={styles.title}>Summary</Text>
                        <Text style={styles.content}> I am Ahmed Atri, a software engineering student specializing in full-stack web development. With freelance experience, I deliver successful projects on time and within budget. I prioritize data security and create responsive designs. Proficient in React and ExpressJS, I adapt quickly to new technologies. Currently seeking an internship or part-time job to complement my academic program.</Text>

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

                </View>
            </Page>
        </Document>
    );

    if (experienceLoading || workLoading || contactLoading || skillsLoading) {
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