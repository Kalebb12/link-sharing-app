const List = ({ link , i } :{link :[]  , i :number}) => {
  return (
    <div key={i} className="p-5 flex flex-col gap-3 bg-[--light-gray]">
      <div className="flex justify-between">
        <span>Link #{i + 1}</span>
        <span>Remove</span>
      </div>

      <div>
        <span>platform</span>
        <select className="myInput px-4 py-3 rounded-lg border-[--disabled-black] cursor-pointer border outline-none w-full">
          <option value="">GitHub</option>
          <option value="">GitHub</option>
          <option value="">GitHub</option>
          <option value="">GitHub</option>
          <option value="">GitHub</option>
          <option value="">GitHub</option>
          <option value="">GitHub</option>
          <option value="">GitHub</option>
        </select>
      </div>

      <div>
        link
        <input
          type="text"
          placeholder="https://www."
          className="myInput px-4 py-3 rounded-lg border-[--disabled-black] cursor-pointer border outline-none w-full"
        />
      </div>
    </div>
  );
};

export default List;
