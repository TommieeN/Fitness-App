import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Nequq adipiscing amet amet enim. Feugiat dolor",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Donec est ipsum, condimentum nec tincidunt nec, iaculis nec leo.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img 
          className="mx-auto"
          src={BenefitsPageGraphic}
          alt="benefits-page-graphic"
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:content-abstract before:absolute before:-left-20 before:-top-20 before:z-[1]">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500"></span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
                nunc nibh. Phasellus commodo ante ac feugiat malesuada.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aenean congue, lorem eget
                luctus molestie, lacus diam commodo nisi, ac sodales lacus nunc
                sed lectus
              </p>
              <p className="mb-5">
                Quisque vulputate elit non dapibus feugiat. Sed rhoncus varius
                venenatis. Vivamus rutrum lectus a orci hendrerit, quis maximus
                massa pretium
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:content-sparkles before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
