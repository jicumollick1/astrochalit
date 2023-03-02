import React from "react";
import service1 from "../assets/WEBP/Custom-Made Reports-svg.webp";
import service2 from "../assets/WEBP/Analysis of the Houses and Zodiac Signs-svg.webp";
import service3 from "../assets/WEBP/Astrology Charts-svg.webp";
import service4 from "../assets/WEBP/Sadhe Sati Analysis-svg.webp";
import service5 from "../assets/WEBP/Predictions based on Planets Position-svg.webp";
import service6 from "../assets/WEBP/Predictions based on Numerology-svg.webp";
import service7 from "../assets/WEBP/Dosha Predictions and Analysis-svg.webp";
import service8 from "../assets/WEBP/Powerful Remedies Offered-svg.webp";
import ExpectCard from "./ExpectCard";

const ExpectCards = () => {
  const services = [
    {
      id: 1,
      title: "Custom-Made Reports",
      description:
        "This is a summary of the planets positions at the time of your birth. It serves as the foundation for all astrological analysis and the future predictions. These reports will cover a wide range of topics, including personality traits, career paths, health concerns, love and relationships among others.",
      img: service1,
    },
    {
      id: 2,
      title: "Analysis of the Houses and Zodiac Signs",
      description:
        "The 12 houses in astrology represent different areas of life, and they are determined by the individual's time, date, and place of birth. Each house is associated with a specific zodiac sign, and the planets that are placed in the houses can influence the individual's personality traits and life experiences. This House and Zodiac report will help you understand which sign is situated in which particular house.",
      img: service2,
    },
    {
      id: 3,
      title: "Astrology Charts",
      description:
        "In your personalized Horoscope report, we include the divisional charts for various aspects of your life. As an example: The placement of planets in the Hora Chart is analyzed to gain insights into the financial and material prosperity of an individual, the Navamsa chart is often consulted before making important decisions related to marriage, partnerships, or spiritual practices etc.",
      img: service3,
    },
    {
      id: 4,
      title: "Sadhe Sati Analysis",
      description:
        "Our astrology report provides information on the timing and duration of the Sadhe Sati period, its potential effects on different areas of life, and recommendations for remedies to mitigate the negative effects. This is a challenging period that can bring difficulties, obstacles, and challenges in different areas of life, including health, career, finances, and relationships. This report includes the start and end dates of all three Sadhe Sati periods, as well as simple remedies for overcoming the challenges.",
      img: service4,
    },
    {
      id: 5,
      title: "Predictions based on Planets’ Position",
      description:
        "In Vedic astrology, planetary profiles refer to the analysis of the placement and influence of planets in an individual's horoscope. The Vedic system uses a total of 9 planets and these planets represent different archetypal energies that influence different areas of life. This report examines each planet in depth, revealing its nature - Yogakaraka, Benefic, Malefic, or Neutral - and the impact it has on your life.",
      img: service5,
    },
    {
      id: 6,
      title: "Predictions based on Numerology",
      description:
        "Numerology assigns a numerical value to each letter of the alphabet, and by adding the numbers associated with an individual's name and birth date, a 'life path number' can be calculated. This life path number is believed to represent the individual's overall purpose in life and the key traits and characteristics that will help them achieve that purpose.  This personalized report includes a full numerological analysis based on your birth date and name.",
      img: service6,
    },
    {
      id: 7,
      title: "Dosha Predictions and Analysis",
      description:
        "Doshas such as Kaal Sarp Dosha, Mangal Dosha, Pitra dosha, Shani Dosha & Guru Chandal Dosha can have a negative impact on our lives. In this report, we examine the kundali for the presence and strength of these doshas, as well as simple remedial measures to mitigate their malefic impact, are also provided.",
      img: service7,
    },
    {
      id: 8,
      title: "Powerful Remedies Offered",
      description:
        "Gemstone therapy, Rudraksha, and recitation of mantras are three of the most powerful remedies for alleviating the malevolent effects of planets. Determine which Gemstone, Rudraksha, and Mantra are most beneficial to you. These remedies are believed to have specific energies and vibrations that can help balance the planetary influences and improve the individual's well-being.",
      img: service8,
    },
  ];

  return (
    <div>
      {services.map((service) => (
        <ExpectCard key={service.id} service={service}></ExpectCard>
      ))}
    </div>
  );
};

export default ExpectCards;
