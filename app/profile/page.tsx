import Image from "next/image";
import Tiles from "@/app/profile/_components/Tiles";

const Profile = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="bg-secondary w-[80vw] rounded-2xl m-5 flex py-7 px-6">
        <div className="w-1/4">
          <div className="relative flex-shrink-0 h-36 w-36 rounded-full overflow-hidden">
            <Image
              src="/profile-1.jpeg"
              alt="Profile"
              fill={true}
              className="object-cover"
              sizes="48px"
            />
          </div>
        </div>
        <div className="flex-1">
          {/* Author Details section */}
          <div className="flex flex-col">
            {/* Author Name Section */}
            <div className="flex items-center">
              <h3 className="text-2xl font-bold">John Doe</h3>
              <span className="text-sub-dark text-blue-600 text-xs font-bold mx-3 p-1 bg-blue-100 rounded-4xl">
                Pro Author
              </span>
            </div>

            {/* Author Description Section */}
            <p className="max-w-3xl my-2">
              Design Enthusisat and Tech content writer. Creating interactive
              UI's and likes to share news about Ai and technology.
            </p>

            {/* Author Main buttons */}
            <div className="flex gap-2">
              <button className="profile-buttons">Edit Profile</button>
              <button className="profile-buttons">Dashboard</button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center gap-x-4">
        <Tiles name={"articles"} value={45} />
        <Tiles name={"likes"} value={1200} />
        <Tiles name={"comments"} value={45} />
        <Tiles name={"followers"} value={345} />
      </section>

      <section>Account settings</section>
    </main>
  );
};

export default Profile;
