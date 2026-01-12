import React from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Code,
  BookOpen,
  Microscope,
  Dna,
} from "@/components/ui/icons";
import Image from "next/image";
import { useIntersection } from "@/hooks/use-intersection";
import styles from "./About.module.css";
import animations from "@/styles/animations.module.css";

const About = () => {
  const [sectionRef, isVisible] = useIntersection<HTMLElement>({
    threshold: 0.35,
    rootMargin: "-50px 0px",
  });

  const badges = [
    { icon: Code, text: "Software Developer" },
    { icon: BookOpen, text: "Lifelong Learner" },
    { icon: Microscope, text: "Science Enthusiast" },
    { icon: Dna, text: "Astronomy Buff" },
  ];

  return (
    <section id="about" ref={sectionRef} className={styles.aboutSection}>
      <div className="container xl:max-w-6xl px-10">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-6 items-start ">
          <div className="md:col-span-2 space-y-6 order-2 md:order-1">
            <p className={animations.fadeIn} data-visible={isVisible}>
              Hello! I'm Izima Obisike, a passionate software developer.
              <br /> I bring a unique perspective to development.
            </p>

            <div
              className={`${styles.quoteBox} ${animations.fadeIn} border-primary/15 border-2 rounded-lg bg-primary/5`}
              data-visible={isVisible}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-foreground italic">
                "I approach development like diagnosis—breaking down complex
                problems, identifying the root cause, and applying the best
                solution. Whether I'm debugging an app or optimizing a user
                experience, I make sure it is focused, methodical, and always
                aiming for the best outcome."
              </p>
            </div>

            <p
              className={animations.fadeIn}
              data-visible={isVisible}
              style={{ transitionDelay: "400ms" }}
            >
              When I'm not coding or studying medicine, you can find me
              exploring topics in space and biology, catching up on Marvel
              movies, or revisiting classics like Harry Potter and Pacific Rim.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {badges.map((item, index) => (
                <div
                  key={item.text}
                  className={`${styles.badge} ${animations.slideInFromRight} bg-secondary hover:bg-primary group transition-colors ease-in-out`}
                  data-visible={isVisible}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <item.icon
                    size={16}
                    className="text-primary group-hover:text-white"
                  />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 order-1 justify-self-start md:order-2">
            <div className={`${styles.profileImage} ${animations.pulseHover}`}>
              <Image
                src="/profile.jpeg"
                alt="Izima Obisike"
                width={320}
                height={600}
                priority
              />
            </div>
          </div>

          <div className="md:col-span-3 justify-self-center order-3">
            <Button asChild className={animations.pulseHover} size="lg">
              <a
                href={"/Obisike Izima.pdf"}
                download=""
                className="flex items-center gap-3 text-xl"
              >
                <FileText size={20} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
