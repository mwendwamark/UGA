import Image from "next/image";
import { Button } from "../../../components/ui/Button";
import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <Image
          src="/assets/home/HomeHero.webp"
          alt="Utumishi Girls Academy Campus"
          fill
          priority
          quality={80}
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.overlay} />

      <div className={`${styles.content} container`}>
        <div className={styles.left}>
          <span className={styles.tag}>Gilgil, Nakuru County · Est. 2019</span>
          <h1 className={styles.title}>Utumishi Girls Academy</h1>
          <p className={styles.motto}>Greatness In Humility</p>
        </div>

        <div className={styles.right}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>96%</span>
              <span className={styles.statLabel}>
                University Transition Rate
              </span>
            </div>

            <div className={styles.stat}>
              <span className={styles.statNumber}>400+</span>
              <span className={styles.statLabel}>
                Students currently Enrolled
              </span>
            </div>
          </div>
          <div className={styles.rightButtons}>
            <Button href="/academics" variant="yellow">
              KCSE 2025 Results
            </Button>
            <Button href="/about" variant="white-outline">
              Explore more
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <p className={styles.scrollText}>Scroll</p>
      </div>
    </section>
  );
}
