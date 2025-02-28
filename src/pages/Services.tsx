
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AgencyShowcase from "@/components/AgencyShowcase";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconDevices,
  IconBrandShopee,
  IconBrandGoogle,
  IconUsers,
  IconBrandWordpress,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 bg-black/80"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-custom-orange/20 p-2 items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-custom-orange to-amber-500 flex-shrink-0" />
        <div className="w-full bg-custom-orange/10 h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-custom-orange/20 p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
      >
        <div className="w-full bg-custom-orange/10 h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-custom-orange to-amber-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-custom-orange/20 p-2 items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-custom-orange to-amber-500 flex-shrink-0" />
        <div className="w-full bg-custom-orange/10 h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 bg-black/80"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-custom-orange/20 p-2 items-center space-x-2 bg-custom-orange/10 w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #E46534, #ff8a4c, #E46534, #b33f20)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 bg-black/80"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-black p-4 border-custom-orange/20 border flex flex-col items-center justify-center"
      >
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-custom-orange to-amber-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4 font-jakarta">
          Creative Design
        </p>
        <p className="border border-custom-orange bg-custom-orange/20 text-custom-orange text-xs rounded-full px-2 py-0.5 mt-4">
          Excellence
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-black p-4 border-custom-orange/20 border flex flex-col items-center justify-center">
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-custom-orange to-amber-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4 font-jakarta">
          Responsive Design
        </p>
        <p className="border border-green-500 bg-green-500/10 text-green-500 text-xs rounded-full px-2 py-0.5 mt-4">
          Adaptive
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-black p-4 border-custom-orange/20 border flex flex-col items-center justify-center"
      >
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-custom-orange to-amber-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-gray-300 mt-4 font-jakarta">
          SEO Optimization
        </p>
        <p className="border border-blue-500 bg-blue-500/10 text-blue-500 text-xs rounded-full px-2 py-0.5 mt-4">
          Growth
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 bg-black/80"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-custom-orange/20 p-2 items-start space-x-2 bg-black"
      >
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-custom-orange to-amber-500" />
        <p className="text-xs text-gray-300 font-jakarta">
          Our CMS solutions make content management simple, intuitive, and powerful...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-custom-orange/20 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-gray-300 font-jakarta">Full control.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-custom-orange to-amber-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Web Development",
    description: (
      <span className="text-sm text-gray-300 font-jakarta">
        Custom websites that are fast, secure, and optimized for all devices. We use the latest technologies to create robust solutions.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconDevices className="h-4 w-4 text-custom-orange" />,
  },
  {
    title: "E-Commerce Solutions",
    description: (
      <span className="text-sm text-gray-300 font-jakarta">
        Complete online store development with secure payment gateways, inventory management, and user-friendly interfaces.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconBrandShopee className="h-4 w-4 text-custom-orange" />,
  },
  {
    title: "SEO Optimization",
    description: (
      <span className="text-sm text-gray-300 font-jakarta">
        Boost your online visibility with our expert SEO strategies. Rank higher in search results and attract more qualified traffic.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrandGoogle className="h-4 w-4 text-custom-orange" />,
  },
  {
    title: "UI/UX Design",
    description: (
      <span className="text-sm text-gray-300 font-jakarta">
        User-centered design that not only looks beautiful but also creates intuitive and engaging experiences for your audience.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconUsers className="h-4 w-4 text-custom-orange" />,
  },
  {
    title: "CMS Development",
    description: (
      <span className="text-sm text-gray-300 font-jakarta">
        Custom WordPress themes and plugins or headless CMS solutions tailored to your specific content management needs.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBrandWordpress className="h-4 w-4 text-custom-orange" />,
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-7xl mx-auto px-8 lg:px-16 pt-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-syne">
            Our <span className="text-custom-orange">Services</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto font-jakarta">
            At Zenith Studio, we are committed to providing exceptional digital solutions tailored to suit your unique business needs.
          </p>
        </div>

        {/* OUR PROCESS SECTION - Now shown first */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold mb-6 text-white font-syne">Our <span className="text-custom-orange">Process</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-custom-orange/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-custom-orange text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-syne">Discovery</h3>
              <p className="text-gray-400 font-jakarta">We learn about your business, goals, and target audience</p>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-custom-orange/20"></div>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-custom-orange/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-custom-orange text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-syne">Planning</h3>
              <p className="text-gray-400 font-jakarta">We develop a strategic roadmap for your project</p>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-custom-orange/20"></div>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-custom-orange/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-custom-orange text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-syne">Execution</h3>
              <p className="text-gray-400 font-jakarta">We bring the vision to life with expert execution</p>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-custom-orange/20"></div>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-full bg-custom-orange/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-custom-orange text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-syne">Growth</h3>
              <p className="text-gray-400 font-jakarta">We continuously optimize and scale your solution</p>
            </div>
          </div>
        </div>

        {/* BENTO GRID SECTION - Now shown after the process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-white font-syne text-center">Our <span className="text-custom-orange">Offerings</span></h2>
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={
                  <div>
                    {item.description}
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-white font-syne">
                        Starts at ${1500 + (i * 300)}
                      </p>
                      <Button variant="outline" className="text-custom-orange border-custom-orange/30 hover:bg-custom-orange/10 font-jakarta">
                        Book a Call
                      </Button>
                    </div>
                  </div>
                }
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="border border-custom-orange/20 rounded-lg p-8 bg-black/50 hover:border-custom-orange/40 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-white font-syne">Digital Strategy Services</h2>
            <ul className="space-y-3 text-gray-300 font-jakarta">
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Digital Transformation Consulting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Market Research & Competitor Analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Brand Strategy Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Business Growth Planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Digital Channel Optimization</span>
              </li>
            </ul>
          </div>

          <div className="border border-custom-orange/20 rounded-lg p-8 bg-black/50 hover:border-custom-orange/40 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-white font-syne">Marketing Services</h2>
            <ul className="space-y-3 text-gray-300 font-jakarta">
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Content Marketing Campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Social Media Management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Email Marketing Automation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>PPC & Display Advertising</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-custom-orange">•</span>
                <span>Conversion Rate Optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Services;
