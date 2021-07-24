declare global {
    namespace Game {
        // Methods injected by CCSE
        export let customLumpTooltip: Array<(str: string, phase: number) => String>
        export let customOptionsMenu: Array<() => void>
        export let customStatsMenu: Array<() => void>
    }

    namespace CCSE {
        export let isLoaded: undefined | 1;
        export let postLoadHooks: undefined | Array<()=>void>;

        export function AppendCollapsibleOptionsMenu(title: string, body: string | HTMLDivElement) : void;
        export function AppendStatsVersionNumber(modName: string, versionString: string) : void;

        export function ConfirmGameCCSEVersion(
            modName:string, modVersion:string,
            gameVersion: string|number, ccseVersion: string|number
        ) : boolean;

        namespace config {
            export let OtherMods: {
                [modName: string]: any;
            }
        }
    }
}

export {} // Mark this as a module