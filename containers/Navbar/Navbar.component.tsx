import Content from "@/components/Content";

const Navbar = () => {
  return (
    <div className="border border-gray-40 py-3">
      <Content className="flex justify-between items-center py-0">
        <div>Home</div>
        <div>About</div>
        <div>Team</div>
      </Content>
    </div>
  );
};

export default Navbar;
