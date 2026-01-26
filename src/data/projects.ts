export type Project = {
  id: string;
  nameKey: string;
  descriptionKey: string;
  tagsKey: string[];
  repo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'flexible-erc20',
    nameKey: 'projects.flexibleERC20.name',
    descriptionKey: 'projects.flexibleERC20.description',
    tagsKey: ['tags.solidity', 'tags.token'],
    repo: 'https://github.com/carzygod/FlexibleERC20',
    featured: true,
  },
  {
    id: 'wechat-mpc',
    nameKey: 'projects.wechatMpc.name',
    descriptionKey: 'projects.wechatMpc.description',
    tagsKey: ['tags.mpc', 'tags.wallet'],
    repo: 'https://github.com/carzygod/Wechat-Alipay-MPC-Wallet-Solution',
    featured: true,
  },
  {
    id: 'fskinfun',
    nameKey: 'projects.fskinfun.name',
    descriptionKey: 'projects.fskinfun.description',
    tagsKey: ['tags.evm', 'tags.contract'],
    repo: 'https://github.com/carzygod/FskinFun',
    featured: true,
  },
  {
    id: 'funproxy',
    nameKey: 'projects.funproxy.name',
    descriptionKey: 'projects.funproxy.description',
    tagsKey: ['tags.proxy', 'tags.infra'],
    repo: 'https://github.com/carzygod/funproxy',
    featured: true,
  },
  {
    id: 'tonspay',
    nameKey: 'projects.tonspay.name',
    descriptionKey: 'projects.tonspay.description',
    tagsKey: ['tags.payments', 'tags.ton'],
    repo: 'https://github.com/carzygod/Tonspay',
    featured: true,
  },
  {
    id: 'tgwc',
    nameKey: 'projects.tgwc.name',
    descriptionKey: 'projects.tgwc.description',
    tagsKey: ['tags.telegram', 'tags.wallet'],
    repo: 'https://github.com/carzygod/Tonspay',
    featured: true,
  },
];
