'use client';

import React from 'react';
import { useMemo, useState } from 'react';
import { ArrowUpRight, Brain, ChartNoAxesCombined, House, Leaf, Map, Sparkles, Wallet, Search, SlidersHorizontal, Code2 } from 'lucide-react';
import { projects, type Project } from '@/content/projects';

const categories = ['All projects', 'Apps & websites', 'Smart home', 'Travel'] as const;
type CategoryFilter = typeof categories[number];
const iconMap = { brain: Brain, leaf: Leaf, chart: ChartNoAxesCombined, home: House, map: Map, sparkles: Sparkles, wallet: Wallet };

function ProjectIcon({ project }: { project: Project }) {
  const Icon = iconMap[project.icon];
  return <div className={`project-icon icon-${project.icon}`}><Icon size={22} strokeWidth={1.8} /></div>;
}

export default function ProjectBrowser() {
  const [category, setCategory] = useState<CategoryFilter>('All projects');
  const [query, setQuery] = useState('');
  const visibleProjects = useMemo(() => projects.filter((project) => {
    const matchesCategory = category === 'All projects' || project.category === category;
    const haystack = `${project.name} ${project.description} ${project.tags.join(' ')} ${project.tech.join(' ')}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase().trim());
  }), [category, query]);

  return <>
    <section className="project-tools" id="projects" aria-label="Browse projects">
      <div className="filter-row" role="group" aria-label="Filter by category">
        {categories.map((item) => <button key={item} className={`filter-chip ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <label className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a project…" aria-label="Search projects" /><SlidersHorizontal size={16} className="search-end" /></label>
    </section>
    <div className="results-meta"><span>{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}</span><span className="results-line" /><span>Made by fBit</span></div>
    {visibleProjects.length ? <div className="project-grid">{visibleProjects.map((project) => <article className={`project-card ${project.featured ? 'featured-card' : ''}`} key={project.slug}>
      <div className="card-top"><ProjectIcon project={project} /><span className={`status status-${project.status.toLowerCase().replaceAll(' ', '-')}`}><span className="status-dot" />{project.status}</span></div>
      <div className="card-copy"><p className="eyebrow">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p></div>
      <div className="tag-row">{project.featured && <span className="tag" key="featured">Featured project</span>}{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="tech-stack"><p className="tech-stack-label">Built with</p><div className="tech-row">{project.tech.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}</div></div>
      <div className="card-bottom">{project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={16} /></a> : <span className="project-link muted-link">Project details <Code2 size={16} /></span>}<span className="card-index">/{project.slug}</span></div>
    </article>)}</div> : <div className="empty-state"><Search size={24}/><h3>No projects found</h3><p>Try another search term or category.</p><button className="text-button" onClick={() => { setQuery(''); setCategory('All projects'); }}>Clear filters</button></div>}
  </>;
}
