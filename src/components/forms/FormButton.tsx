const FormButton = ({ label }: { label: string }) => {
  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-primary-1/75 px-3 py-1.5 text-sm font-semibold leading-6 text-light-1 transition-colors shadow-sm hover:bg-primary-1 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-primary-1"
      >
        {label}
      </button>
    </div>
  );
};

export default FormButton;
