import React from "react";
import styles from "./HomeAbout.module.css";
import Pretitle from "@/components/preTitle/Pretitle";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import schoolImg from "../../../public/assets/home/school.webp";
import schoolImg1 from "../../../public/assets/home/HomeAbout1.jpg";
import schoolImg2 from "../../../public/assets/home/HomeAbout3.jpg";
import schoolImg3 from "../../../public/assets/home/HomeAbout2.jpg";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const stats = [
  { number: "96%", label: "University Transition Rate" },
  { number: "400+", label: "Students Enrolled" },
  { number: "2019", label: "Year Established" },
];

const HomeAbout = () => {
  return (
    <section className={`${styles.section} section`}>
      <div className={`${styles.wrapper} container`}>
        {/* ── Headers row ── */}
        <div className={`${styles.headers} `}>
          <div className={styles.headersLeft}>
            <Pretitle text="About Us" />
            <h2 className="section_title grey">About Utumishi Girls Academy</h2>
          </div>
          <div className={styles.headersRight}>
            <p className="body_text">
              Nestled in the scenic highlands of Gilgil, Nakuru County, Utumishi
              Girls Academy is a premier girls boarding school committed to
              academic excellence and holistic character formation. A sister
              school of the celebrated Utumishi Boys Academy, UGA carries the
              same proud tradition of producing disciplined, confident, and
              purpose-driven young women ready to lead Kenya's future.
            </p>
            <Button variant="blue" href="/about">
              Our full story
            </Button>
          </div>
        </div>

        {/* ── Body row ── */}
        <div className={styles.body}>
          {/* Right — info */}
          <div className={styles.infoBlock}>
            <div className={styles.infoText}>
              <h3 className="sub_section_title">Shaping leaders since 2019</h3>
              <p className="body_text">
                UGA offers a structured, nurturing boarding environment where
                academic rigour meets personal growth. Our students consistently
                achieve top KCSE results while developing the character,
                discipline, and leadership skills that define the Utumishi
                graduate.
              </p>
              <p className="body_text">
                From our modern science labs and well-stocked library to our
                vibrant sports grounds and over 30 active clubs, every aspect of
                life at UGA is designed to bring out the best in every girl.
              </p>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.trustStrip}>
              <span className={styles.trustLabel}>Affiliated with</span>
              <Link href="https://www.knec.ac.ke/" className={styles.trustItem}>
                <span>Kenya National Examinations Council</span>  <ArrowUpRight size={10} />
              </Link>
              <span className={styles.trustDot} />
              <Link href="https://www.education.go.ke/" className={styles.trustItem}>
                <span>Ministry of Education</span> <ArrowUpRight size={10} />
              </Link>
              <span className={styles.trustDot} />
              <Link href="https://www.tsc.go.ke/" className={styles.trustItem}>
                <span>Teachers Service Commission</span> <ArrowUpRight size={10} />
              </Link>
            </div>
          </div>

          {/* Left — images */}
          <div className={styles.imageBlock}>
            <div className={styles.imageRowTop}>
              <div className={`${styles.imageWrap} ${styles.imageTall}`}>
                <Image
                  src={schoolImg}
                  alt="Utumishi Girls Academy main campus"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.img}
                  loading="lazy"
                />
              </div>
              <div className={`${styles.imageWrap} ${styles.imageShort}`}>
                <Image
                  src={schoolImg1}
                  alt="UGA students"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.img}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.imageRowBottom}>
              <div className={`${styles.imageWrap} ${styles.imageShort}`}>
                <Image
                  src={schoolImg2}
                  alt="UGA campus life"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.img}
                  loading="lazy"
                />
              </div>
              <div className={`${styles.imageWrap} ${styles.imageTall}`}>
                <Image
                  src={schoolImg3}
                  alt="UGA campus life"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.img}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
