import { Icon } from '@iconify/react';
import React from 'react';

const Bagde = ({ icon, score, label, vibe }) => {
  return (
    <div className="border-slate-700 relative border-[1px] rounded-md p-4 text-slate-100">
      <Icon
        icon={icon}
        className={`text-[32px] absolute right-4 top-4 ${vibe}`}
      />
      <p className="text-[32px]">{score}</p>
      <p className="text-[14px] text-slate-300">{label}</p>
    </div>
  );
};

const Badges = ({ pokemonData }) => {
  return (
    <section className="mt-10">
      <h2 className="text-slate-100 text-[16px] font-medium">Species Stat</h2>
      <div className="mt-4 grid grid-cols-4 gap-4 w-[100%] mx-auto">
        <Bagde
          icon={'system-uicons:face-happy'}
          label="Base happiness"
          score={pokemonData?.species?.base_happiness}
          vibe={'text-yellow-500'}
        />
        <Bagde
          icon={'ic:baseline-block'}
          label="Capture rate"
          score={pokemonData?.species?.capture_rate}
          vibe={'text-rose-500'}
        />
        <Bagde
          icon={'ph:gender-intersex'}
          label="Gender rate"
          score={pokemonData?.species?.gender_rate}
          vibe={'text-pink-500'}
        />
        <Bagde
          icon={'ph:egg-crack-light'}
          label="Hatch counter"
          score={pokemonData?.species?.hatch_counter}
          vibe={'text-lime-500'}
        />
      </div>
    </section>
  );
};

export default Badges;
