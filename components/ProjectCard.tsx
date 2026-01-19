interface ProjectCardProps {
  title: string;
  description: string;
  achievement: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({
  title,
  description,
  achievement,
  tags,
  href,
}: ProjectCardProps) {
  return (
    <article className="group border border-border p-8 hover:border-foreground transition-all duration-300">
      {/* Achievement Badge */}
      <div className="mb-6">
        <span className="text-body-small text-muted uppercase tracking-wider">
          {achievement}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-heading-2 mb-4 group-hover:text-muted transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body text-muted mb-6 max-w-prose">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-body-small px-3 py-1 border border-border"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read More Link */}
      
        href={href}
        className="inline-flex items-center text-body font-semibold group-hover:gap-2 transition-all"
      >
        Read Case Study
        <span className="ml-2 group-hover:ml-0 transition-all">→</span>
      </a>
    </article>
  );
}