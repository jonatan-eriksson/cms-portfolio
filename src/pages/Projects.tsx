import axios from "axios";
import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get('wp-json/wp/v2/projects');
      const projects = res.data;
      console.log(projects);
      setProjects(projects);
    }
    fetchProjects();
  }, []);


  return (
    <div className="self-cente mt-6">
      <h2 className="text-gray-200 text-4xl mb-10">Projects</h2>
      <div className="flex flex-wrap gap-8 justify-evenly">
        {projects && projects.map((project: any) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
