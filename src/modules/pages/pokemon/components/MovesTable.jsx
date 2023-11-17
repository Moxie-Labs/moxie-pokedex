import React from 'react';

const MovesTable = ({ pokemonData }) => {
  return (
    <section className="mt-10">
      <h2 className="text-slate-100 text-[16px] font-medium">Moves</h2>
      <table className="mt-4 w-[100%]" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr className="grid grid-cols-5 text-left px-6 py-3 text-slate-300 text-[14px] bg-slate-700">
            <th>SI</th>
            <th>Name</th>
            <th>Level Learn</th>
            <th>Learn Method</th>
            <th>Version Group Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemonData?.data.moves.slice(0, 15).map((move, index) => (
            <tr
              key={index}
              className={`${
                index > 0 &&
                index < pokemonData?.data.moves.length - 1 &&
                'border-b-[1px] border-slate-800'
              } grid grid-cols-5 border-b-[1px] capitalize border-slate-800 px-6 py-4 text-slate-300 text-[14px]`}
            >
              <td>{index + 1}</td>
              <td>{move.move.name}</td>
              <td>{move.version_group_details[0].level_learned_at}</td>
              <td>{move.version_group_details[0].move_learn_method.name}</td>
              <td>{move.version_group_details[0].version_group.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MovesTable;
