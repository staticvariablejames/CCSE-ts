Typings for CCSE
================

This package contains partial TypeScript typings for Klattmose's
[Cookie Clicker Script Extender](https://klattmose.github.io/CookieClicker/CCSE-POCs/).

Currently,
the available types are only the ones needed for my own mods
([Choose Your Own Lump](https://github.com/staticvariablejames/ChooseYourOwnLump),
[Insugar Trading](https://github.com/staticvariablejames/InsugarTrading/),
[Spiced Cookies](https://github.com/staticvariablejames/SpicedCookies)).


Convention About Possibly Null Arrays
=====================================

These typings tell a few white lies about possibly null arrays.

CCSE has two types of callback arrays:
the ones which are created by CCSE when it is initialized,
and the ones which are created on-demand when minigames are loaded.
Technically,
all of these arrays will be undefined before CCSE is loaded,
but they have the crucial difference that,
if `CCSE && CCSE.isLoaded` returns true,
then those arrays will be available;
and the functions in your mod should only be running if CCSE is loaded anyway.

Therefore,
the arrays which are created for certain when CCSE is loaded
are _not_ marked as possibly undefined.
The other arrays
(which may be nonexistent even if the check `CCSE && CCSE.isLoaded` passes)
are still marked as `| undefined`.
