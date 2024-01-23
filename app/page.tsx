import DragDrop from "@/components/dragDrop";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={title()}>Make me the things Easiest</h1>
      <DragDrop />
    </main>
  );
}
