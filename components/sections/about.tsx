import { LEST } from "@/constants";
import FeatureCard from "../feature-card";
import * as motion from "motion/react-client";

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto pt-[130px] px-[30px]">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 30 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          bounce: 0.5,
          delay: 0.5,
        }}
        className="min-h-min flex flex-wrap items-center justify-center gap-x-8 md:flex-col md:gap-y-4 sm:gap-y-6 sm:flex-col"
      >
        {/* content */}
        <div className="flex flex-col w-[310px] mr-[50px] my-auto md:mr-0">
          <h3 className="text-h3">We Help Transforms Your Business</h3>
          <p className="text-body-16 text-neutral-2">
            Our mission is to empower individuals and organizations to unleash
            their creative potential.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 flex-1 md:grid-cols-1 sm:grid-cols-1 md:gap-y-4 sm:gap-y-6">
          {LEST.map((feature, index) => (
            <FeatureCard key={feature.title || index} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
