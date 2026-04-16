import React from "react";
import styles from "./WhyUGA.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Pretitle from "@/components/preTitle/Pretitle";

const whyUGACards = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "Consistent top KCSE results driven by dedicated faculty and a structured, rigorous curriculum.",
    link: "/about/academics",
  },
  {
    number: "02",
    title: "Character Formation",
    description:
      "We build integrity, discipline, and leadership into every aspect of student life.",
    link: "/about/character-formation",
  },
  {
    number: "03",
    title: "Safe Environment",
    description:
      "A fully secure, supportive boarding environment where every student feels seen and valued.",
    link: "/about/environment",
  },
  {
    number: "04",
    title: "Holistic Development",
    description:
      "Sports, arts, clubs, and community service develop the whole person — not just the student.",
    link: "/about/holistic-development",
  },
  {
    number: "05",
    title: "Modern Facilities",
    description:
      "Well-equipped labs, library, sports grounds, and dormitories built for focused learning.",
    link: "/about/facilities",
  },
];

const HomeAbout = () => {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.heading}>
          <Pretitle text="Why UGA?" />
          <h2 className={`section_title grey ${styles.title}`}>
            What makes us stand out
          </h2>
        </div>

        <div className={styles.cards}>
          {whyUGACards.map((card, index) => (
            <Link href={card.link} key={index} className={styles.card}>
              {/* Default state */}
              <div className={styles.cardDefault}>
                <span className={styles.cardNumber}>{card.number}</span>
                <h3 className={`sub_section_title ${styles.cardTitle}`}>
                  {card.title}
                </h3>
                <div className={styles.cardIcon}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Hover reveal */}
              <div className={styles.cardHover}>
                <div className={styles.cardHoverInner}>
                  <h3 className={`${styles.cardHoverTitle} sub_section_title`}>
                    {card.title}
                  </h3>
                  <p className={styles.cardHoverDesc}>{card.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
