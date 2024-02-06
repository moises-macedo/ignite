import { Button } from "@/components";
import { Play } from "@phosphor-icons/react";

export const Home = () => (
  <div className="w-full mx-auto max-w-2xl space-y-16">
    <Form />
    <Counter />

    <Button form="form">
      <Play size={24} />
      Começar
    </Button>
  </div>
);

const Form = () => (
  <form className="flex gap-2 w-full justify-center" id="form">
    <fieldset className="flex gap-2 flex-1">
      <label className="text-gray-100 cursor-pointer" htmlFor="task">
        Vou trabalhar em
      </label>
      <input
        type="text"
        id="task"
        className="bg-transparent outline-none border-b-2 border-gray-400 flex-1 px-2 text-white [&::-webkit-calendar-picker-indicator]:opacity-0"
        placeholder="Dê um nome para o seu projeto"
        list="task-list"
      />
      <datalist id="task-list">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>
    </fieldset>
    <fieldset className="flex gap-2">
      <label className="text-gray-100 cursor-pointer" htmlFor="minutes">
        durante
      </label>
      <input
        type="number"
        id="minutes"
        className="bg-transparent outline-none border-b-2 border-gray-400 w-full max-w-20 text-center text-white"
        placeholder="00"
        step={5}
        min={0}
        max={60}
      />
      <label className="text-gray-100" htmlFor="minutes">
        minutos
      </label>
    </fieldset>
  </form>
);

const Counter = () => (
  <div className="w-full flex justify-between text-white font-bold">
    <span className="text-[160px] bg-gray-600 px-4 rounded-lg">0</span>
    <span className="text-[160px] bg-gray-600 px-4 rounded-lg">0</span>
    <span className="text-[160px] text-green-500 px-4 rounded-lg">:</span>
    <span className="text-[160px] bg-gray-600 px-4 rounded-lg">0</span>
    <span className="text-[160px] bg-gray-600 px-4 rounded-lg">0</span>
  </div>
);
