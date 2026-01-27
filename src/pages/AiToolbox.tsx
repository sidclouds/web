import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import ToolCard from '@/components/ToolCard';
import { imageAssets } from '@/data/assets';

type RemoteTool = {
  id: string;
  name: string;
  category?: string;
  vendor?: string;
  website?: string;
  description?: string;
  tags?: string[];
  sources?: string[];
};

const AiToolbox = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [tools, setTools] = useState<RemoteTool[]>([]);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const remote = await fetch('https://carzygod.github.io/AI-TOOL-BOX/main.json');
        if (remote.ok) {
          const data = (await remote.json()) as RemoteTool[];
          setTools(Array.isArray(data) ? data : []);
          return;
        }
      } catch {
        // fall back below
      }
      try {
        const local = await fetch('/main.json');
        if (local.ok) {
          const data = (await local.json()) as RemoteTool[];
          setTools(Array.isArray(data) ? data : []);
        }
      } catch {
        setTools([]);
      }
    };

    fetchTools();
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const category = tool.category || 'Other';
      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const content = [
        tool.name,
        tool.description,
        tool.vendor,
        tool.category,
        ...(tool.tags || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      const matchesQuery = content.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, tools]);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(
        tools
          .map((tool) => tool.category || 'Other')
          .filter(Boolean),
      ),
    );
    return unique;
  }, [tools]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <Seo titleKey="seo.ai.title" descriptionKey="seo.ai.description" />
      <SectionHeading title={t('toolbox.ai.title')} description={t('toolbox.ai.subtitle')} />

      <div className="glass-panel relative mb-8 overflow-hidden rounded-3xl border border-white/10">
        <img
          src={imageAssets.banner.src}
          alt={t(imageAssets.banner.altKey)}
          className="h-48 w-full object-cover md:h-56"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-white/70">
          favorcoin
        </div>
      </div>

      <div className="glass-panel flex flex-col gap-4 rounded-3xl border border-white/10 p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
              activeCategory === 'all'
                ? 'border-neon-cyan/60 text-neon-cyan'
                : 'border-white/20 text-white/60 hover:border-neon-cyan/40'
            }`}
          >
            {t('toolbox.filterAll')}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                activeCategory === category
                  ? 'border-neon-cyan/60 text-neon-cyan'
                  : 'border-white/20 text-white/60 hover:border-neon-cyan/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t('toolbox.search')}
          className="w-full rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white/80 outline-none transition focus:border-neon-pink/60 md:w-72"
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredTools.map((tool) => (
          <ToolCard
            key={tool.id}
            name={tool.name}
            summary={tool.description || ''}
            scene={tool.vendor || tool.category || 'AI Tool'}
            tags={tool.tags || []}
            url={tool.website || tool.sources?.[0] || 'https://example.com'}
          />
        ))}
      </div>
    </section>
  );
};

export default AiToolbox;
