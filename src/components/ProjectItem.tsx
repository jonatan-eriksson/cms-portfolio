import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

const ProjectItem = ({ project }: any) => {
  return (
    <div className="max-w md:max-w-2xl lg:max-w-md xl:max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
      <img className="w-full" src={project.acf.image.url} alt={project.acf.image.alt} />
      <div className="px-6 py-4">
        <div className="text-gray-200 font-bold text-xl mb-2">{project.acf.title}</div>
        <p className="text-gray-300 text-base">{project.acf.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.acf.tags && project.acf.tags.map((tag: any, idx: number) => (
          <span key={idx} className="inline-block bg-gray-700 rounded px-2 py-1 text-sm text-gray-300 mr-2 mb-2">{tag.name}</span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2 flex gap-2">
        {project.acf.githuburl && (
          <a className="text-2xl hover:text-teal-300" href={project.acf.githuburl} target="_blank" rel="noopener noreferrer">
            <VscGithubAlt />
          </a>
        )}
        {project.acf.url && (
          <a className="text-2xl hover:text-teal-300" href={project.acf.url} target="_blank" rel="noopener noreferrer">
            <VscLinkExternal />
          </a>
        )}
      </div>

    </div>
  );
}

export default ProjectItem;
