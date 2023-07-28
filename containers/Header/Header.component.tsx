const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <div className="w-[50px] h-[50px] bg-red rounded-full" />
        <div>
          <h1 className="font-semibold text-[21px]">Kommina</h1>
          <h4 className="font-medium">Tour & Travel</h4>
        </div>
      </div>

      <div>
        <div>Call us, we are open 24/7</div>
        <div className="font-semibold">(555) 33286</div>
      </div>
    </div>
  );
};

export default Header;
