import React from "react";
import Pretitle from "@/components/preTitle/Pretitle";
import styles from "./HomeIntro.module.css";

export default function HomeIntro() {
  return (
    <section className={`${styles.section}  section`}>
      <div className={`${styles.home_section_wrapper} small_container`}>
        <div className={`${styles.home_intro_wrapper} grid`}>
          <div className={`${styles.home_intro_left}`}>
            <Pretitle text="introduction" variant="onBlue" />{" "}
          </div>
          <div className={`${styles.home_intro_right}`}>
            <h2 className="section_title white">
              Empowering young women through academic excellence and disciplined
              leadership, Utumishi Girls Academy fosters a nurturing environment
              where every student thrives and succeeds.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
