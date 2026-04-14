import React from "react";
import Pretitle from "@/components/preTitle/Pretitle";
import styles from "./HomeIntro.module.css";

export default function HomeIntro() {
  return (
    <section className={`${styles.section} small_container section`}>
      <div className={`${styles.home_intro_wrapper} grid`}>
        <div className={`${styles.home_intro_left}`}>
          <Pretitle text="introduction" />
        </div>
        <div className={`${styles.home_intro_right}`}>
          <h2 className={`${styles.home_intro_title}`}>
            Empowering young women through academic excellence and disciplined
            leadership, Utumishi Girls Academy fosters a nurturing environment
            where every student thrives and succeeds.
          </h2>
        </div>
      </div>
    </section>
  );
}
