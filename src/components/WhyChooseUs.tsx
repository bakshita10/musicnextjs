"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent=[
    {
        title:'Discover Your Sound With Us: A Personal Journey in Music Mastery',
        description:'Embark on a musical journey thats uniquely yours. Our personalized instruction adapt to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspiratons meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
        title:'Live Feedback & Engagement',
        description:'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
    },
    {
        title:'Cutting-Edge Curriculum',
        description:'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring youre a always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
    },
    {
        title:'Limitless Learning Opportunities',
        description:'With our expansive resource library and dynamic course offerings, youll never find yourself without something new to explorw. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing'
    },
    {
        title:'Discover Your Sound With Us: A Personal Journey in Music Mastery',
        description:'Embark on a musical journey thats uniquely yours. Our personalized instruction adapt to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspiratons meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
        title:'Live Feedback & Engagement',
        description:'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
    },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
