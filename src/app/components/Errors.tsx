const Errors = ({ errors }: { errors: string[] }): JSX.Element => {
  return (
    <div className="errors mb-6">
      {errors.map((error, index) => (
        <p key={index} className={`text-red-400 mt-1 mb-1`}>
          {error}
        </p>
      ))}
    </div>
  );
};

export default Errors;
