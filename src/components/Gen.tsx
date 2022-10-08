export function Gen() {
  return (
    <div className="flex flex-row flex-wrap gap-[20px] max-w-[880px] justify-center  ">
      {Array(8)
        .fill(0)
        .map((item, index) => {
          return (
            <div
              className=" flex justify-center items-center  border rounded-[20px] bg-red-800 w-[200px] h-[50px]"
              key={index}
            >
              {" "}
              <p>Geração {index + 1}</p>
            </div>
          );
        })}
      <div className="border rounded-[20px] bg-red-800 w-[420px] h-[50px] flex justify-center items-center">
        <a>All</a>
      </div>
    </div>
  );
}
