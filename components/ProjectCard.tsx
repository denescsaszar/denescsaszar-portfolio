type ProjectCardProps = {
  title: string;
  description: string;
  achievement: string;
  tags: string[];
  href: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="border border-border p-8 hover:border-foreground transition-all">
      <div className="mb-4">
        <span className="text-sm text-muted uppercase">{props.achievement}</span>
      </div>
      <h3 className="text-2xl font-bold mb-4">{props.title}</h3>
      <p className="text-muted mb-4">{props.description}</p>
      <div className="flex gap-2 mb-4">
        {props.tags.map((tag, i) => (
          <span key={i} className="text-sm px-2 py-1 border border-border">{tag}</span>
        ))}
      </div>
      <a href={props.href} className="font-semibold">Read Case Study →</a>
    </div>
  );
}
