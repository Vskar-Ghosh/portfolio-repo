import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className=" col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <div>
          <ResumeCard
            badge=""
            title="Start Wev Development"
            subtitle=""
            des="
            Embarked on web development journey driven by self-enthusiasm, leveraging online resources and practice to master skills, fueled by a passion for creating innovative digital solutions."
          />
          <ResumeCard
            badge="2023-2024"
            title="Multi Vendor Website"
            subtitle=""
            des="
            Developed a robust multi-vendor ecommerce platform using the MERN stack. Designed a sleek client-side UI offering seamless shopping experiences, an intuitive admin panel for centralized management, and a robust seller dashboard empowering vendors to efficiently manage products, orders, and analytics in our multi-vendor ecommerce platform."
          />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />

        <ResumeCard
          badge="2018-2022"
          title="Varendra University"
          subtitle="Rajshahi"
          des="Completed Bachelor of Science in Computer Science and Engineering with a notable 3.61 CGPA, showcasing academic excellence."
        />

        <ResumeCard
          badge="2021-2023"
          title="MERN Stack Developer"
          subtitle="Dhaka"
          des="
          Learn MERN stack development by mastering MongoDB for database management, Express.js for backend logic, React.js for dynamic frontend, and Node.js for server-side operations. Utilize online resources, tutorials, and practical projects to gain proficiency in building full-stack web applications with this powerful and versatile technology stack.
          
          
          
          
          
          "
        />
      </div>
    </div>
  );
};

export default Education;
