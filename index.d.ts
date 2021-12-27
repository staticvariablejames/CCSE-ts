declare global {
    namespace Game {
        // Methods injected by CCSE
        export let customLumpTooltip: Array<(str: string, phase: number) => String>;
        export let customDoLumps: Array<() => void>;
        export let customOptionsMenu: Array<() => void>;
        export let customStatsMenu: Array<() => void>;
        export let customInfoMenu: Array<() => void>;
        export let customReset: Array<(hard: boolean) => void>;
        export let customHeavenlyMultiplier: Array<() => number>;
        export let customAscend: Array<() => void>;
        export let customWrinklerPop: Array<() => void>;

        namespace customShimmerTypes {
            namespace golden {
                export let customEffectDurMod: Array<(me: Game.Shimmer) => number>;
                export let durationMult: Array<(me: Game.Shimmer) => number>;
            }
            namespace reindeer {
                export let popFunc: Array<(me: Game.Shimmer) => void>;
            }
        }

        namespace customMinigame {
            namespace Bank {
                export let goodTooltip: undefined | ((id: number, str: string) => void)[];
                export let buyGood: undefined | ((id: number, n: number) => void)[];
                export let sellGood: undefined | ((id: number, n: number) => void)[];
                export let tick: undefined | (() => void)[];
            }
        }

        export const customUpgrades: Record<string, {
            toggle: Array<(me: Game.Upgrade) => void>;
            // Each function must return the modified 'desc'
            descFunc: Array<(me: Game.Upgrade, desc: string) => string>,
        }>;
    }

    namespace CCSE {
        export let isLoaded: undefined | 1;
        export let postLoadHooks: undefined | Array<()=>void>;

        export function AppendCollapsibleOptionsMenu(title: string, body: string | HTMLDivElement) : void;
        export function AppendStatsSpecial(inp: string | HTMLDivElement) : void;
        export function AppendStatsVersionNumber(modName: string, versionString: string) : void;
        export function PrependCollapsibleInfoMenu(title: string, body: string | HTMLDivElement): void;

        export function MinigameReplacer(func: (obj: Game.Object, scriptName: string) => void, objKey: string);

        export function NewUpgrade(
            name: string,
            desc: string,
            price: number,
            icon: Game.Icon,
            buyFunction?: () => void
        ) : Game.Upgrade;

        export function NewHeavenlyUpgrade(
            name: string,
            desc: string,
            price: number,
            icon: Game.Icon,
            posX: number,
            posY: number,
            parents: string[],
            buyFunction?: () => void
        ) : Game.HeavenlyUpgrade;

        export function NewAchievement(
            name: string,
            desc: string,
            icon: Game.Icon
        ) : Game.Achievement;

        export function ConfirmGameVersion(
            modName:string,
            modVersion:string,
            version: string|number
        ) : boolean;

        export function ConfirmGameCCSEVersion(
            modName:string,
            modVersion:string,
            gameVersion: string|number,
            ccseVersion: string|number
        ) : boolean;

        namespace config {
            export let OtherMods: {
                [modName: string]: any;
            }
        }
    }
}

export {} // Mark this as a module
