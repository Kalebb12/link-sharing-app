import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Mobile from "@/components/phone";
const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div
        id="screen"
        className="flex  gap-6 sm:p-6 p-4 sm:pt-0 justify-center max-w"
      >
        <Mobile />
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col gap-10 bg-[--white] sm:p-10 p-[24px] border-b rounded-xl rounded-b-none">
            <h1 className="sm:text-[32px] font-bold">Profile Details</h1>
            <span>
              Add your details to create a personal touch to your profile.
            </span>
            <div className="flex flex-col gap-6">
              <div className="h-[233px] bg-[--light-gray]"></div>
              <form className="flex flex-col p-5 gap-3 bg-[--light-gray]">
                <div className="mini:flex-row flex flex-col justify-between">
                  <span>First name*</span>
                  <input type="text" required  className="myInput px-4 py-3 rounded-lg border border-[--purple] outline-none"/>
                </div>
                <div className="mini:flex-row flex flex-col justify-between">
                  <span>Last name*</span>
                  <input type="text" required  className="myInput px-4 py-3 rounded-lg border border-[--purple] outline-none"/>
                </div>
                <div className="mini:flex-row flex flex-col justify-between">
                  <span>Email</span>
                  <input type="email" className="myInput px-4 py-3 rounded-lg border border-[--purple] outline-none"/>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
