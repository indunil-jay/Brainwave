const EmailInput = ({ label, id }: { label: string; id: string }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-light-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type="email"
          autoComplete="email"
          required
          className="block w-full bg-primary-1/10 rounded-md border-0 py-2 px-4 text-light-1 shadow-sm ring-1 ring-inset ring-primary-1/50 placeholder:text-light-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-1 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default EmailInput;
