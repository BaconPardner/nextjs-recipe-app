import { UploadContext } from "lib/contexts";
import { FormEventHandler, useContext } from "react";

type FormProps = {
  onSubmit: FormEventHandler;
  children: JSX.Element;
};

export const Form = ({ onSubmit, children }: FormProps) => {
  const { page, setPage } = useContext(UploadContext);

  const handleDecrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <form
      className="space-y-5 px-5 pb-10 transition-opacity sm:px-10"
      onSubmit={onSubmit}
    >
      <h1 className="pt-5 text-center font-bold">Upload a recipe</h1>

      {children}
      <section className="mt-auto flex justify-between p-10 px-5">
        <button
          className="rounded-md bg-white py-2 px-5 text-blue-500 transition ease-in-out hover:bg-blue-50 active:ring disabled:invisible"
          type="button"
          disabled={page > 1 ? false : true}
          onClick={handleDecrement}
        >
          Back
        </button>
        <button
          className="rounded-md bg-blue-500 py-2 px-5 text-white transition ease-in-out hover:bg-blue-600 active:ring"
          type="submit"
        >
          {page < 4 ? "Next" : "Submit"}
        </button>
      </section>
    </form>
  );
};

export default Form;