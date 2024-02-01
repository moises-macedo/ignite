import { PlusCircle } from "@phosphor-icons/react";
import { Button, Input, Task } from "./components";
import { Rocket } from "./icons";
import { ComponentProps, FormEvent, useState } from "react";

type TaskProps = {
  id: string;
  content: string;
  completed: boolean;
};

export function App() {
  const [task, setTask] = useState<TaskProps[]>(localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")!) : []);
  console.log(task);

  const AddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const content = (e.currentTarget[0] as HTMLInputElement).value.trim();

    if (content.length === 0) return;
    const newTask = {
      id: String(Math.random()),
      content,
      completed: false,
    };
    setTask([...task, newTask]);
    localStorage.setItem("task", JSON.stringify([...task, newTask]));

    (e.currentTarget[0] as HTMLInputElement).value = "";
  };
  const CompletTask = (id: string) => {
    const newTask = task.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  };

  const DeleteTask = (id: string) => {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  };

  return (
    <main className="w-full min-h-screen bg-hero">
      <header className="w-full flex items-center justify-center gap-3 h-[173px]">
        <Rocket />
        <strong className="text-4xl font-black text-blue-300">
          to
          <span className="text-violet-500">do</span>
        </strong>
      </header>
      <form
        onSubmit={(e) => AddTask(e)}
        className="container flex items-center justify-center gap-2 w-full"
      >
        <Input placeholder="Adicione uma nova tarefa" />
        <Button model="submit">
          Criar <PlusCircle size={16} weight="bold" className="flex-none" />
        </Button>
      </form>
      <section className="pt-16 container">
        <div className="flex items-center justify-between font-bold pb-6 border-b border-gray-400">
          <p className="text-blue-300 flex gap-2 text-sm">
            Tarefas criadas <CounterText>{task.length}</CounterText>
          </p>
          <p className="text-violet-300 flex gap-2">
            Concluídas <CounterText>{task.filter((task) => task.completed).length}</CounterText>
          </p>
        </div>
        <ul className="pt-6 flex flex-col gap-3">
          {task.map(({ id, content, completed }) => (
            <li key={id}>
              <Task.Root completed={completed}>
                <Task.Checkbox defaultChecked={completed} onCheckedChange={() => CompletTask(id)} />
                <Task.Text completed={completed}>{content}</Task.Text>
                <Button model={"delete"} onClick={() => DeleteTask(id)} />
              </Task.Root>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

const CounterText = ({ ...props }: ComponentProps<"span">) => (
  <span
    className="px-2 bg-gray-400 rounded-full text-xs flex items-center"
    {...props}
  />
);
