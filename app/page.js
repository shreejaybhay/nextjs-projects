import Hex from "@/components/hex";
import Guess from "@/components/guess";
import Counter from "@/components/Counter";
import Country from "@/components/Country";
import Movies from "@/components/movies";
import Quote from "@/components/Quote";
import Joke from "@/components/Joke";
import Dictionary from "@/components/Dictionary";



export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hex />
      <Guess />
      <Counter />
      <Country />
      <Movies />
      <Quote />
      <Joke />
      <Dictionary />
    </div>
  );
}
