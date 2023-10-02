import { useParams } from "react-router-dom";
import { getAnimatedImageSrc, getPokemonTypes } from "../util/functions";
import { PokemonNotFound } from "../components/PokemonNotFound";
import { Card } from "../components/Card";
import { TypeBadge } from "../components/TypeBadge";
import { BasicStats } from "../components/BasicStats";
import { HighLevelStats } from "../components/HighLevelStats";
import { BackButton } from "../components/BackButton";
import { fetchEvolutionChart } from "../util/queries";
import { useQuery } from "@tanstack/react-query";

export const PokemonDetails = ({ pokemonList }) => {
  const { id } = useParams();

  const pokemon = pokemonList.find((pokemon) => pokemon.id.toString() === id);
  const types = getPokemonTypes(pokemon);

  const image = getAnimatedImageSrc(pokemon);
  const {
    data: evolutionData,
    isLoading,
    isError,
  } = useQuery(["evolution", pokemon?.name], () =>
    fetchEvolutionChart(pokemon?.name)
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full min-h-[100dvh]">
        <div>
          <Card className={"p-6 relative flex flex-col gap-2 px-10"}>
            <div className="w-48 h-48 rounded-full bg-slate-100">
              <img src="/pokeball-loading.gif" alt="loading" />
            </div>
            <p className="text-center">Loading pokemon data</p>
          </Card>
        </div>
      </div>
    );
  }

  if (isError) {
    return <PokemonNotFound />;
  }

  return (
    <div className="relative flex justify-center w-full py-20">
      <div className="absolute left-0 top-4">
        <BackButton />
      </div>
      <div className="gap-10 max-w-[990px] w-full">
        <div className="text-center sm:space-y-4">
          <h1 className="text-2xl font-bold text-center capitalize md:text-6xl">
            {pokemon?.name}
          </h1>
          <p className="text-slate-400">#{pokemon.id}</p>
        </div>
        <img
          className="w-1/2 mx-auto my-10 sm:hidden"
          src={image ?? ""}
          alt={""}
        />
        <div className="flex flex-col w-full gap-6 sm:mt-64">
          <Card className={"relative p-6 sm:pt-48 "}>
            <div className="flex flex-col gap-6">
              <div className="flex justify-center gap-2">
                {types.map((type) => {
                  return <TypeBadge key={type} type={type} />;
                })}
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full">
                  <BasicStats
                    {...{
                      height: pokemon.height,
                      weight: pokemon.weight,
                      base_experience: pokemon.base_experience,
                      abilities: pokemon.abilities,
                    }}
                  />
                </div>
                <div className="w-full">
                  <Card className={"bg-slate-100 shadow-none p-2"}>
                    <HighLevelStats stats={pokemon.stats} />
                  </Card>
                </div>
              </div>
            </div>
            <img
              className="hidden sm:block h-[350px] absolute top-0 -mt-[180px] -translate-x-1/2 left-1/2 "
              src={image ?? ""}
              alt={""}
            />
          </Card>
          <Card className={"p-6"}>
            <h3 className="text-2xl font-bold">Evolution</h3>
            <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
              {evolutionData.map((evo) => {
                return (
                  <div className="flex flex-col items-center gap-y-4">
                    <div className="flex items-center justify-center w-32 rounded-full aspect-square bg-slate-100">
                      <img src={evo.sprite} alt={evo.name} />
                    </div>
                    <p className="font-bold capitalize">{evo.name}</p>
                    <div className="flex items-center gap-2">
                      {evo.types.map((type) => {
                        return <TypeBadge type={type} />;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
