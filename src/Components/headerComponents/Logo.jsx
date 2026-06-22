export default function Logo() {
  return (
    <>
      <div className=" h-full">
        <img className="h-28 w-28 " src={`${import.meta.env.BASE_URL}img/logo.png`}alt="" />
      </div>
    </>
  );
}
