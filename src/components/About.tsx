import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const About: React.FC = () => {
  const { skills: skillsData, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-red-500">Error loading data: {error}</div>
        </div>
      </section>
    );
  }

  // Icon mapping for different skill categories
  const iconMap: { [key: string]: any } = {
    Frontend: Palette,
    Backend: Code,
    Mobile: Smartphone,
    DevOps: Globe,
    Database: Code,
    Design: Palette,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with a love for creating digital experiences 
              that are not only functional but also beautiful and intuitive. With expertise in 
              modern web technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  My journey in software development began with a curiosity about how things work 
                  behind the scenes. What started as tinkering with HTML and CSS has evolved into 
                  a comprehensive skill set spanning multiple technologies and frameworks.
                </p>
                <p>
                  I specialize in building responsive web applications using React and TypeScript, 
                  with a strong focus on user experience and performance optimization. I'm particularly 
                  passionate about creating interfaces that are both aesthetically pleasing and 
                  highly functional.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community through 
                  blog posts and tutorials.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '3+', label: 'Years Experience' },
                  { number: '100%', label: 'Client Satisfaction' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillsData?.technical?.map((skillGroup: any) => {
                  const IconComponent = iconMap[skillGroup.category] || Code;
                  return (
                    <motion.div
                      key={skillGroup.category}
                      variants={itemVariants}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                          <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {skillGroup.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
