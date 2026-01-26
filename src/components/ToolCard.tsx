import { motion } from 'framer-motion';
import { Copy, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '@/components/CodeBlock';
import type { ToolboxItem } from '@/data/toolbox';

export type ToolCardProps = ToolboxItem & {
  onCopy: (code: string) => void;
};

const ToolCard = ({
  nameKey,
  summaryKey,
  sceneKey,
  tagKeys,
  code,
  language,
  onCopy,
}: ToolCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-card rounded-3xl border border-white/10 p-6 shadow-soft transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-neon-cyan" />
            <h3 className="font-display text-lg text-white">{t(nameKey)}</h3>
          </div>
          <p className="mt-2 text-sm text-white/70">{t(summaryKey)}</p>
        </div>
        <button
          type="button"
          onClick={() => onCopy(code)}
          className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-neon-pink/60 hover:text-neon-pink"
        >
          <Copy className="h-4 w-4" />
          {t('toolbox.copy')}
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tagKeys.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neon-cyan/30 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neon-cyan/90"
          >
            {t(tag)}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
        {t('toolbox.scene')} ? {t(sceneKey)}
      </p>
      <details className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3">
        <summary className="cursor-pointer text-xs uppercase tracking-[0.2em] text-white/70">
          {t('toolbox.snippet')}
        </summary>
        <div className="mt-3">
          <CodeBlock code={code} language={language} />
        </div>
      </details>
    </motion.div>
  );
};

export default ToolCard;
