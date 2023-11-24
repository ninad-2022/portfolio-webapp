import Divider from "@/components/divider/divider";
import Intro from "@/components/intro/intro";
import profile from "@/assets/profile.jpg";
import About from "@/components/about/about";
import Projects from "@/components/project/projects";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro
        name="Ninad Bhoir"
        description="a dynamic and results-driven software developer with expertise in JavaScript, React, and Nodejs. I am passionate about crafting innovative solutions and pushing technology boundaries."
        contactLink="#contact"
        cvLink="/CV.pdf"
        linkedinLink="https://www.linkedin.com/in/ninad-bhoir-981a74169/"
        githubLink="https://github.com/ninad-2022"
        profileImg={profile}
      />
      <Divider />
      <About />
      <Projects/>
    </main>
  );
};

export default Home;
