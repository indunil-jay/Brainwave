const EmailInput = ({ label }: { label: string }) => {
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
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block w-full rounded-md border-0 py-2 px-4 text-light-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-1 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default EmailInput;
