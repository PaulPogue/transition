const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="text-center text-sm mt-6 opacity-40">
      <p> &copy; {year} Sullivan & Curry, LLP. All Rights Reserved</p>
    </div>
  );
};
export default Copyright;
