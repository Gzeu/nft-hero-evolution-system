# Economy Design

Acest document detaliază integrarea economică GameFi pentru sistemul de evoluție al eroilor NFT.

## Cost Upgrade Eră
- Cost per upgrade eră: **0.25 EGLD** (ajustat de la 100 EGLD pentru accesibilitate).
- Necesită, de asemenea, un **NFT ritual Tarot** specific arhetipului pentru a confirma trecerea în eră nouă.
- Costul poate fi parametrizat în smart contract pentru a fi modificat prin DAO.

## NFT-Gated Advanced Nodes
- Anumite noduri avansate din skill tree necesită deținerea unor NFT-uri tematice:
  - Exemplu Marte: `Mars Blade NFT` pentru noduri de tip burst/damage.
  - Exemplu Mercur: `Mercury Ring NFT` pentru noduri de tip evade/illusion.
- NFT-urile sunt mintate pe MultiversX și pot avea rarity tiers (R1–R5) care scalează bonusurile.
- Contractul verifică deținerea NFT-ului la activarea nodului, nu la fiecare utilizare de skill.

## Guild / DAO Rank Requirements
- Fiecare erou este asociat opțional cu un **Guild**;
- Noduri avansate și skill-uri globale (ex: `DAO Overlord`, `Rogue Syndicate`) au cerințe de rank:
  - Guild Rank 1+: acces la noduri economice de bază (loot share, trade bonus).
  - Guild Rank 2+: acces la noduri defensive/ofensive globale.
  - `DAO Leader`: acces la ultimate-uri sociale globale.
- Rank-ul este gestionat printr-un contract separat (Guild/DAO) și referențiat de contractul de eroi.

## Reset Mechanics
- **Reset parțial**:
  - Cost: **0.05 EGLD**.
  - Limită: max 1 reset / săptămână per erou.
  - Aprobare: opțional prin DAO vote (snapshot on-chain sau off-chain + oracol).
  - Efect: Resetează o singură ramură (Fizică/Mentală/Socială/Specială), returnând punctele de talent.

- **Reset complet**:
  - Gratuit automat la trecerea într-o eră nouă (încurajează respec total la power spike).
  - În afara upgrade-ului de eră:
    - Necesită un **NFT rar `Tarot Reset Shard`**.
    - Distribuție: max 1/lună per cont, listat pe marketplace MultiversX.
    - Efect: Resetează toate ramurile și permite rebuild complet al celor 20 de noduri.

## Flux Economic Simplificat
1. Jucătorul farmează PvE/PvP și obține EGLD + shards + NFT-uri tematice.
2. Folosește EGLD (max 0.25 per eră) + NFT Tarot pentru a urca în eră.
3. Activează noduri avansate blocate de NFT-uri (Mars Blade, Mercury Ring etc.) și rank Guild/DAO.
4. Dacă build-ul nu mai este optim, folosește reset parțial (0.05 EGLD) sau NFT Tarot Reset Shard pentru reset complet.
