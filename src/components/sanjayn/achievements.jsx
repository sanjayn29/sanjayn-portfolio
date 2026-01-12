import { useEffect, useRef, useState } from 'react';

// Image imports (path: src/assert/)
import April2024Img from '../../assert/RRC.jpg';
import Sept2024Img from '../../assert/AI-Code.jpg';
import Nov2024Img from '../../assert/SCD-Code.jpg';
import Mar2025Img from '../../assert/KEC-Hack.jpg';
import Apr2025Img from '../../assert/BYTS-Hack.jpg';
import Sept2025IbmImg from '../../assert/IBM-Hack.jpg';
import Sept2025Img from '../../assert/SIH-KEC.jpg';
import Dec2025Img from '../../assert/SIH-Final.jpg';

const Achievements = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const linkedInProfile = 'https://www.linkedin.com/in/sanjay-n-867612297';

  const achievements = [
    {
      title: 'Red Ribbon Club – Slogan Writing Competition (2nd Prize)',
      organization: 'Kongu Engineering College',
      description: 'Won Second Prize in the Slogan Writing Competition conducted by the Red Ribbon Club. Focused on promoting awareness and social responsibility through impactful messaging. Recognized for creativity, clarity, and relevance among first-year participants.',
      icon: '📝',
      image: April2024Img,
      date: 'Apr 2024',
      fullDate: '2024-04-01', // For sorting
      link: linkedInProfile,
    },
    {
      title: 'Coding Quest – AI Association (Prize Winner)',
      organization: 'Department of Artificial Intelligence, Kongu Engineering College',
      description: 'Secured a prize position in the Coding Quest event as part of NEWELL’S 2024, an intra-department symposium organized by the AI Association. Demonstrated strong problem-solving, coding proficiency, and logical thinking.',
      icon: '💻',
      image: Sept2024Img,
      date: 'Sep 2024',
      fullDate: '2024-09-01',
      link: linkedInProfile,
    },
    {
      title: 'Code Clash – SDC Fest 2025 (2nd Prize)',
      organization: 'Self Development Club, Kongu Engineering College',
      description: 'Secured Second Prize in Code Clash, a technical coding competition during SDC Fest 2025. Demonstrated strong programming skills, logical thinking, and competitive problem-solving abilities.',
      icon: '🏆',
      image: Nov2024Img,
      date: 'Nov 2024',
      fullDate: '2024-11-01',
      link: linkedInProfile,
    },
    {
      title: "KEC Hackathon 2025 – Software Edition (1st Prize - AgriTech Category)",
      organization: 'Kongu Engineering College',
      description: 'State-level 30-hour hackathon organized by REC Coding Forum and Innovation & Entrepreneurship Forum. Developed an innovative AgriTech solution with my team. Secured 1st prize in the AgriTech category.',
      icon: '🔧',
      image: Mar2025Img,
      date: 'Mar 2025',
      fullDate: '2025-03-01',
      link: linkedInProfile,
    },
    {
      title: 'BYTS India Hackathon (BIH) 1.0 – Best Innovation',
      organization: 'Kongu Engineering College',
      description: 'Secured the Best Innovation Award in the 24-hour BYTS India Hackathon (BIH) 1.0 – Artificial Intelligence Edition. Developed an innovative AI-based solution demonstrating creativity, technical depth, and real-world applicability.',
      icon: '🤖',
      image: Apr2025Img,
      date: 'Apr 2025',
      fullDate: '2025-04-01',
      link: linkedInProfile,
    },
    {
      title: 'Cognitive X – Gen AI 24-Hour Hackathon – 1st Prize',
      organization: 'Kongu Engineering College (KEC)',
      description: 'Secured 1st Prize at the Cognitive X – Gen AI 24-Hour Hackathon in collaboration with IBM and SmartBridge. Developed CashMan, an AI-powered collaborative personal finance application.',
      icon: '💰',
      image: Sept2025IbmImg,
      date: 'Apr 2025',
      fullDate: '2025-04-15', // Slight offset for sorting if same month
      link: linkedInProfile,
    },
    
    {
      title: 'SIH Internal Hackathon 2025 – 1st Prize',
      organization: 'Kongu Engineering College (KEC)',
      description: 'Secured 1st Prize in the SIH Internal Hackathon 2025 as a member of Team United Outliers under the Software/Hardware category. Qualified for Smart India Hackathon via innovative solution for problem ID: SIH25073.',
      icon: '👥',
      image: Sept2025Img,
      date: 'Sep 2025',
      fullDate: '2025-09-01',
      link: linkedInProfile,
    },
    
    {
      title: 'Smart India Hackathon 2025 – Hardware Edition (Grand Finale)',
      organization: 'Ministry of Education, Government of India',
      description: 'Participated in the Smart India Hackathon 2025 – Hardware Edition Grand Finale as a Team Member. Contributed to hardware-focused innovative solution, gaining national-level experience in problem-solving and collaboration.',
      icon: '⚙️',
      image: Dec2025Img,
      date: 'Dec 2025',
      fullDate: '2025-12-08', // Specific dates from original
      link: linkedInProfile,
    },
  ];

  // Group achievements by year
  const groupByYear = achievements.reduce((groups, achievement) => {
    const year = achievement.fullDate.split('-')[0];
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(achievement);
    return groups;
  }, {});

  // Sort years descending (2025 first, then 2024)
  const sortedYears = Object.keys(groupByYear).sort((a, b) => b - a);

  // Sort achievements within each year by fullDate descending
  sortedYears.forEach(year => {
    groupByYear[year].sort((a, b) => new Date(b.fullDate) - new Date(a.fullDate));
  });

  return (
    <section id="achievements" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Achievements
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Achievements by Year - Rows and Columns */}
        <div className={`space-y-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {sortedYears.map((year, yearIndex) => (
            <div key={year} className="space-y-6" style={{ transitionDelay: `${(yearIndex + 1) * 200}ms` }}>
              {/* Year Header */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-glow-blue rounded-full"></div>
                <h3 className="font-display text-2xl font-bold text-silver-primary">
                  {year}
                </h3>
              </div>

              {/* Grid for this year */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupByYear[year].map((achievement, index) => (
                  <div
                    key={index}
                    className="group glass-card transition-all duration-700 hover-glow-blue"
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    {/* Full Image */}
                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                      {achievement.image ? (
                        <img
                          src={achievement.image}
                          alt={`${achievement.title} proof`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <div className="text-6xl opacity-75">{achievement.icon}</div>
                        </div>
                      )}
                      {/* Semi-transparent overlay for text readability */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {/* Title */}
                      <h4 className="font-display text-lg font-semibold text-silver-primary mb-2 group-hover:text-glow-blue transition-colors duration-300 line-clamp-2">
                        {achievement.title}
                      </h4>

                      {/* Organization */}
                      <p className="text-glow-blue text-sm font-medium mb-2">
                        {achievement.organization}
                      </p>

                      {/* Description */}
                      <p className="text-silver-muted text-sm leading-relaxed mb-3 line-clamp-3">
                        {achievement.description}
                      </p>

                      {/* Footer: Date and Link */}
                      <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                        <span className="text-xs opacity-75">{achievement.date}</span>
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-glow-blue text-xs hover:text-silver-primary transition-colors duration-300 flex items-center gap-1"
                        >
                          <span>LinkedIn</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.02-1.57.27-2.12a2.89 2.89 0 0 1 2.24-1.08c.78 0 1.62.42 1.62 1.88v4.25h2.79v-5.5c0-2.48-1.4-3.84-3.26-4.08a3.5 3.5 0 0 0-3.57 3.47v4.15h-2.79V9.18c0-.53 0-1.05.07-1.57s.23-1 .5-1.37.56-.7 1-.87.88-.32 1.54-.32c1.25 0 2.08.74 2.08 1.82v5.42h-2.79z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;