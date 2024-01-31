import { Pencil } from "@phosphor-icons/react";
import { Button } from "./components";
import { Ignite } from "./icons";
import { ComponentProps, ComponentPropsWithRef } from "react";
import { cx } from "cva";

export function App() {
  return (
    <>
      <Header />
      <div className="flex flex-1 bg-gray-950 w-full h-[calc(100vh-6.313rem)] container gap-8 pt-8">
        <Profile />
        <main className="flex flex-1 flex-col gap-8">
          <Post />
        </main>
      </div>
    </>
  );
}
const Header = () => (
  <header className="flex items-center justify-center w-full py-5 bg-gray-900 gap-4">
    <Ignite />
    <h1 className="text-2xl font-bold text-gray-200">Ignite Feed</h1>
  </header>
);

const Profile = () => (
  <article className="flex z-10 flex-col items-center gap-3 rounded-lg bg-gray-900 h-fit w-full max-w-[256px] relative overflow-hidden">
    <img
      className="w-full h-[72px] object-cover absolute -z-10 object-center"
      src="https://media.istockphoto.com/id/1498640548/pt/foto/new-2024-year-progress-bar-on-digital-lcd-display-with-reflection.jpg?s=2048x2048&w=is&k=20&c=x1hMsk7xANCfV_iKgiJ7Jfbotay8kCohHxOo8a4DZdE="
    />
    <ImgPerfil className="mt-10" />
    <aside className="flex flex-col items-center justify-center">
      <strong className="text-xl font-bold text-gray-200 mt-4">
        Moisés Macedo
      </strong>
      <span className="text-sm text-gray-400 block">Developer Front End</span>
    </aside>
    <div className="border-t border-gray-800 p-8 pt-6">
      <Button appearance={"secondary"} className="text-nowrap">
        <Pencil size={20} />
        Editar seu perfil
      </Button>
    </div>
  </article>
);

const ImgPerfil = ({ className }: ComponentPropsWithRef<"div">) => (
  <div
    className={cx(
      "rounded-lg p-1.5 border-2 border-green-300 bg-gray-900",
      className
    )}
  >
    <img
      src="https://github.com/moises-macedo.png"
      alt=""
      className="w-12 h-12 rounded-md"
    />
  </div>
);

const Post = () => (
  <div className="bg-gray-900 p-10 rounded-lg">
    <header className="flex items-center justify-between">
      <div className="flex gap-4 justify-center">
        <ImgPerfil />
        <aside className="flex flex-col justify-center">
          <strong className="text-xl font-bold text-gray-200">
            Moisés Macedo
          </strong>
          <span className="text-sm text-gray-400 block">
            Developer Front End
          </span>
        </aside>
      </div>
      <time dateTime={Date().toString()} className="text-sm text-gray-400">
        Públicado há 1h        
      </time>
    </header>
  </div>
);
