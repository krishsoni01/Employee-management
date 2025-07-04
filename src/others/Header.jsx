const Header = (props) => {

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser('');
  };

  const firstName = props.data?.firstName || "Admin";

  return (
    <div className="w-screen h-[80px] p-10 flex items-center justify-between">
      <div className="left">
        <span className="text-2xl font-semibold">Hello,</span>
        <h1 className="text-3xl font-semibold">{firstName} 🖐</h1>
      </div>
      <div className="right">
        <button
          onClick={logOutUser}
          className="bg-red-600 text-white py-2 px-4 rounded-xl text-[16px] font-lg cursor-pointer hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
