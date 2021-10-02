const Square = ({ index, value, setValue, playerCheck }) => {
  const handelClick = (e) => {
    e.preventDefault;
    if (!value) {
      setValue((prev) => {
        const newArray = [...prev];
        newArray[index] = playerCheck;
        return newArray;
      });
    }
  };
  return (
    <button
      className={`square ${value ? value : ""}`}
      onClick={(e) => handelClick(e)}
    >
      {value}
    </button>
  );
};

export default Square;
