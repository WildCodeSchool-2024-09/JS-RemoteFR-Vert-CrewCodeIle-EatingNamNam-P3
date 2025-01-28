import { useForm } from "react-hook-form";
import type { CommentaryType } from "../../lib/definitions";

export default function Comentary() {
  const { register } = useForm<CommentaryType>();

  return (
    <section>
      <form>
        <label htmlFor="">
          <input
            type="text"
            {...register("com_content", {
              required: true,
            })}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
}
