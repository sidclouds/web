export type ToolboxItem = {
  id: string;
  categoryKey: string;
  nameKey: string;
  summaryKey: string;
  sceneKey: string;
  tagKeys: string[];
  code: string;
  language: string;
};

export const aiToolCategories = [
  'toolbox.ai.categories.agentFramework',
  'toolbox.ai.categories.ragMemory',
  'toolbox.ai.categories.toolCalling',
  'toolbox.ai.categories.evalBenchmark',
  'toolbox.ai.categories.automation',
];

export const aiTools: ToolboxItem[] = [
  {
    id: 'atlas',
    categoryKey: 'toolbox.ai.categories.agentFramework',
    nameKey: 'toolbox.ai.tools.atlas.name',
    summaryKey: 'toolbox.ai.tools.atlas.summary',
    sceneKey: 'toolbox.ai.tools.atlas.scene',
    tagKeys: ['tags.orchestration', 'tags.memory', 'tags.workflow'],
    language: 'ts',
    code: `import { AtlasAgent } from '@sidcloud/atlas';

const agent = new AtlasAgent({
  memory: 'vector',
  tools: ['web3', 'calendar', 'code'],
});

await agent.run('Audit the token gate flow.');`,
  },
  {
    id: 'lumen-rag',
    categoryKey: 'toolbox.ai.categories.ragMemory',
    nameKey: 'toolbox.ai.tools.lumen.name',
    summaryKey: 'toolbox.ai.tools.lumen.summary',
    sceneKey: 'toolbox.ai.tools.lumen.scene',
    tagKeys: ['tags.rag', 'tags.vector', 'tags.context'],
    language: 'ts',
    code: `import { LumenStore } from '@sidcloud/lumen';

const store = new LumenStore({ provider: 'qdrant' });
await store.upsert('docs/vision.md');

const answer = await store.query('What is our eval rubric?');`,
  },
  {
    id: 'signal-call',
    categoryKey: 'toolbox.ai.categories.toolCalling',
    nameKey: 'toolbox.ai.tools.signal.name',
    summaryKey: 'toolbox.ai.tools.signal.summary',
    sceneKey: 'toolbox.ai.tools.signal.scene',
    tagKeys: ['tags.tooling', 'tags.routing', 'tags.runtime'],
    language: 'ts',
    code: `import { SignalBridge } from '@sidcloud/signal';

const bridge = new SignalBridge();
bridge.register('swapQuote', async (payload) => ({
  route: 'TON-USDT',
  eta: '12s',
  payload,
}));

await bridge.call('swapQuote', { amount: 2500 });`,
  },
  {
    id: 'pulse-eval',
    categoryKey: 'toolbox.ai.categories.evalBenchmark',
    nameKey: 'toolbox.ai.tools.pulse.name',
    summaryKey: 'toolbox.ai.tools.pulse.summary',
    sceneKey: 'toolbox.ai.tools.pulse.scene',
    tagKeys: ['tags.eval', 'tags.qa', 'tags.benchmark'],
    language: 'ts',
    code: `import { PulseEval } from '@sidcloud/pulse';

const suite = new PulseEval({ rubric: 'agent-core-v2' });
const report = await suite.run('./cases/latency.json');

console.log(report.score);`,
  },
  {
    id: 'drift-automation',
    categoryKey: 'toolbox.ai.categories.automation',
    nameKey: 'toolbox.ai.tools.drift.name',
    summaryKey: 'toolbox.ai.tools.drift.summary',
    sceneKey: 'toolbox.ai.tools.drift.scene',
    tagKeys: ['tags.automation', 'tags.ops', 'tags.monitoring'],
    language: 'ts',
    code: `import { DriftOps } from '@sidcloud/drift';

const ops = new DriftOps();
ops.on('alert', (signal) => console.log(signal));

await ops.watch('agent-cpu', { threshold: 0.78 });`,
  },
];

export const devToolCategories = [
  'toolbox.dev.categories.templates',
  'toolbox.dev.categories.cli',
  'toolbox.dev.categories.deploy',
  'toolbox.dev.categories.automation',
  'toolbox.dev.categories.observability',
];

export const devTools: ToolboxItem[] = [
  {
    id: 'nova-templates',
    categoryKey: 'toolbox.dev.categories.templates',
    nameKey: 'toolbox.dev.tools.nova.name',
    summaryKey: 'toolbox.dev.tools.nova.summary',
    sceneKey: 'toolbox.dev.tools.nova.scene',
    tagKeys: ['tags.templates', 'tags.starter', 'tags.typescript'],
    language: 'bash',
    code: `npx @sidcloud/nova init web3-agent-lab
cd web3-agent-lab
pnpm dev`,
  },
  {
    id: 'neon-cli',
    categoryKey: 'toolbox.dev.categories.cli',
    nameKey: 'toolbox.dev.tools.neoncli.name',
    summaryKey: 'toolbox.dev.tools.neoncli.summary',
    sceneKey: 'toolbox.dev.tools.neoncli.scene',
    tagKeys: ['tags.cli', 'tags.release', 'tags.multichain'],
    language: 'bash',
    code: `sidcloud ship --chain ton --env staging
sidcloud status`,
  },
  {
    id: 'pulse-deploy',
    categoryKey: 'toolbox.dev.categories.deploy',
    nameKey: 'toolbox.dev.tools.pulsedeploy.name',
    summaryKey: 'toolbox.dev.tools.pulsedeploy.summary',
    sceneKey: 'toolbox.dev.tools.pulsedeploy.scene',
    tagKeys: ['tags.deploy', 'tags.wallet', 'tags.guardrails'],
    language: 'bash',
    code: `sidcloud deploy contract --profile ton
sidcloud deploy verify --report`,
  },
  {
    id: 'auto-fleet',
    categoryKey: 'toolbox.dev.categories.automation',
    nameKey: 'toolbox.dev.tools.autofleet.name',
    summaryKey: 'toolbox.dev.tools.autofleet.summary',
    sceneKey: 'toolbox.dev.tools.autofleet.scene',
    tagKeys: ['tags.automation', 'tags.pipeline', 'tags.docs'],
    language: 'yaml',
    code: `name: agent-release
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest`,
  },
  {
    id: 'spectra-observe',
    categoryKey: 'toolbox.dev.categories.observability',
    nameKey: 'toolbox.dev.tools.spectra.name',
    summaryKey: 'toolbox.dev.tools.spectra.summary',
    sceneKey: 'toolbox.dev.tools.spectra.scene',
    tagKeys: ['tags.observability', 'tags.tracing', 'tags.alerts'],
    language: 'ts',
    code: `import { Spectra } from '@sidcloud/spectra';

const watcher = new Spectra();
watcher.track('latency', { target: 320 });`,
  },
];
