function TeachingCard(props) {
  const { focus, benefits } = props;
  console.log(benefits);

  return (
    <div className="border border-solid border-slate-800 hover:border-blue-400 p-4 rounded-lg duration-200 flex flex-col gap-4 group">
      <h4 className="bg-slate-950 border border-solid border-slate-800 w-fit rounded-lg px-4 py-2 text-3xl sm:text-4xl md:text-5xl -mt-8 group-hover:border-blue-400 duration-200">
        {focus}
      </h4>
      {benefits.map((benefit, index) => {
        return <p key={index.toString()}>&rarr; {benefit}</p>;
      })}
    </div>
  );
}

export default TeachingCard;
