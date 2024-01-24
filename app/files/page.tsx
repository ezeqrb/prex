import DragDrop from "@/components/dragDrop";
import { title } from "@/components/primitives";

function Files() {
  return (
    <section className="flex flex-col gap-y-4">
      <h1 className={title()}>Add Files</h1>
      <DragDrop />
      <h1 className={title()}>My Files</h1>

      <h1 className={title()}>Shared Files</h1>
    </section>
  );
}

export default Files;
