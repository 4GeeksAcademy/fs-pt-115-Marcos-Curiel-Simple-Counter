export const Counter = ({ counter }) => {
  const digits = String(counter).padStart(6,"0").split('');

  return (
    <div className="container-counter">
        <i className="fa-regular fa-clock icons"></i>
      {digits.map((digit, index) => (
        <div key={index} className="digitBox">
          {digit}
        </div>
      ))}
    </div>
  );
};
