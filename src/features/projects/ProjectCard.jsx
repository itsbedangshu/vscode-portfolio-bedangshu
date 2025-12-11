import Tag from "./Tag";

/* eslint-disable react/prop-types */
function ProjectCard({ img, title, desc, tags, srcCode, demo }) {
  return (
    <a
      href={srcCode}
      target="_blank"
      rel="noreferrer"
      className="flex  max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg text-textColor hover:shadow-lg hover:no-underline"
    >
      <div className="flex flex-col gap-y-2 p-4">
        <h2 className=" text-2xl font-semibold">{title}</h2>
        <p className=" text-base font-medium">{desc}</p>
        <div className="">
          {tags.map((tag) => {
            return <Tag key={tag} tagName={tag} />;
          })}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
