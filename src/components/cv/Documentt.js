import React, { useEffect, useState } from 'react';
import { Page, View, Document, Text, StyleSheet, Font } from '@react-pdf/renderer';
import Loading from '../Loading';
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

    useEffect(() => {
        async function getWorks() {
            axios.get(`/get-all-work/`).then(res => {
                if (!res.data) {
                    const message = `An error occured: ${res.statusText}`;
                    window.alert(message);
                    return;
                }
                setWorks(res.data);
                setLoading(false)
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
            })


        }

        getSkills();

        return;
    }, [skills.length]);

    function SkillsList() {
        return skills.map((type, i) => {
            return (
                <View style={styles.item}>
                    {type._id == "Skills" ? <Text style={styles.subTitle}>Tech Skills</Text> : <Text style={styles.subTitle}>{type._id}</Text>}
                    {type.records.map((skill) => {
                        return (
                            <Text style={styles.content}>{skill.name}</Text>
                        )
                    })}
                </View>
            );
        });
    }

    function ExperienceList() {
        return experience.map((experience) => {
            return (
                <View style={styles.item}>
                    <Text style={styles.subTitle}>{experience.name}</Text>
                    <Text style={styles.content}>{experience.position}</Text>
                    <Text style={styles.content}>{experience.date}</Text>
                    <Text style={styles.content}>{experience.description}</Text>
                </View>
            );
        });
    }

    function WorksList() {
        return works.map((work) => {
            return (
                <View style={styles.item}>
                    <Text style={styles.subTitle} >{work.name}</Text>
                    <Text style={styles.content} >{work.description}</Text>
                    <Text style={styles.content} >{work.technologies}</Text>
                    <Text style={styles.content} >{work.link}</Text>
                </View>
            );
        });
    }



    // Create Document Component
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.leftCol}>
                    <View style={styles.dark}>
                        <Text style={styles.title}>Ahmed Atri</Text>
                        <Text style={styles.marginBottom}>Software Developer</Text>
                        <Text style={styles.marginBottom}>atriahmed.1999@gmail.com</Text>
                        <Text style={styles.marginBottom}>+216 41362519</Text>
                        <Text style={styles.marginBottom}>Sfax, Tunisia</Text>
                        <Text style={styles.marginBottom}>https://github.com/AtriAhmed</Text>
                        <Text style={styles.marginBottom}>https://www.linkedin.com/in/{'\n'}ahmed-atri-5564601b2</Text>
                        <Text style={{ ...styles.marginBottom, marginTop: '4px' }}>www.ahmedatri.com</Text>
                    </View>

                    <View style={styles.gray}>
                        <View style={styles.section}>
                            <Text style={styles.title}>Education</Text>
                            <Text style={styles.content}>Institute of Computer Science and Multimedia Studies of Sfax</Text>
                            <Text style={styles.content}>september 2018 - Present</Text>
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
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.title}>Professional Experience</Text>
                        {ExperienceList()}
                    </View>

                </View>
            </Page>
        </Document>
    );

    if (loading) {
        return (<div>
            <Loading />
        </div>)
    }

    return <>
        <MyDocument />
    </>
} 