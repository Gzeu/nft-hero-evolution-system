/**
 * Evolution System Types
 * Single source of truth for eras, archetypes, and skill trees
 */

export type EraId = 
  | 'neanderthal' 
  | 'tribes' 
  | 'antiquity' 
  | 'medieval' 
  | 'industrial' 
  | 'digital' 
  | 'cyborg' 
  | 'superhuman'
  | 'posthuman'
  | 'cosmic';

export type ArchetypeId = 'mars' | 'mercury';
export type BranchType = 'war' | 'mind' | 'spirit' | 'fate';
export type TalentState = 'locked' | 'unlockable' | 'unlocked';

export interface EraConfig {
  id: EraId;
  name: string;
  index: number;
  baseUpgradeCostEGLD: number;
  description: string;
  requirements: {
    minEra?: EraId;
    minTalentPoints?: number;
    requiresNft?: string;
    daoRank?: number;
    guildTier?: number;
  };
  theme: {
    color: string;
    icon: string;
    era_suffix?: string;
  };
}

export interface GateRule {
  type: 'era' | 'talent' | 'points' | 'nft' | 'branch';
  era?: EraId;
  talentId?: string;
  minPoints?: number;
  nftRequired?: string;
  branchMinTier?: number;
}

export interface TalentNode {
  id: string;
  name: string;
  branch: BranchType;
  tier: number;
  description: string;
  effect: {
    type: 'stat' | 'ability' | 'passive' | 'unlock';
    value: number | string;
    scalingPerEra?: number;
  };
  cost: number;
  gates: GateRule[];
  loreHook: string;
  eraEvolutions?: any;
}

export interface ArchetypeConfig {
  id: string;
  name: string;
  planet: string;
  tarotCard: string;
  description: string;
  primaryBranch: BranchType;
  secondaryBranch: BranchType;
  talents: TalentNode[];
  starterBonus: { stat: string; value: number };
  uniqueAbility: { name: string; description: string; unlocksAtEra: EraId };
}

export interface HeroState {
  address: string;
  nftIdentifier: string;
  currentEra: EraId;
  eraIndex: number;
  archetype: string;
  totalTalentPoints: number;
  allocatedPoints: number;
  availablePoints: number;
  unlockedTalents: string[];
  specialNfts: any[];
  daoRank?: number;
  guildId?: string;
  guildTier?: number;
  totalEGLDSpent: number;
  evolutionCount: number;
  lastEvolutionTimestamp: number;
  selectedBranch?: BranchType;
  pendingTalentSelections?: string[];
}

export interface EvolutionTransaction {
  heroAddress: string;
  fromEra: EraId;
  toEra: EraId;
  costEGLD: number;
  timestamp: number;
  txHash: string;
  newTalentsUnlocked: string[];
}

export interface SkillTreeState {
  hero: HeroState;
  archetype: ArchetypeConfig;
  visibleTalents: TalentNode[];
  talentStates: Map<string, TalentState>;
}
