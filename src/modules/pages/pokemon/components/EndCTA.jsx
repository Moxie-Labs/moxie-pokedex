import React from 'react';
import { useNavigate } from 'react-router-dom';

const EndCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="border-[1px] flex flex-col lg:flex-row justify-between items-start border-slate-800 px-6 py-6 rounded-lg mt-12">
      <div>
        <h6 className="text-slate-300 mb-2 text-[18px] font-bold">
          Thanks for Exploring Pokémon with Us!
        </h6>
        <p className="text-slate-400 mb-2 lg:w-[80%] text-[14px]">
          Regrettably, we can't extend this further due to time constraints.
          Feel free to continue your Pokémon exploration with thousands more to
          discover!
        </p>
      </div>
      <button
        onClick={() => navigate('/')}
        className="bg-rose-700 mt-5 lg:mt-0 text-slate-100 px-4 py-2 rounded-lg"
      >
        Explore Other Pokemons
      </button>
    </section>
  );
};

export default EndCTA;
