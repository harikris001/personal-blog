import Image from "next/image";
import Tiles from "@/app/profile/_components/Tiles";
import { ChevronRight, Mail } from "lucide-react";

const Profile = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-y-12">
      <section className="surface w-[70vw] min-h-60 rounded-2xl flex py-7 px-6">
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
              <span className="text-sub-dark text-blue-600 text-xs font-bold mx-3 px-2 py-1 bg-blue-100 rounded-4xl">
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
      <section className="flex w-[70vw] justify-between items-center gap-x-4">
        <Tiles name={"articles"} value={45} />
        <Tiles name={"likes"} value={1200} />
        <Tiles name={"comments"} value={45} />
        <Tiles name={"followers"} value={345} />
      </section>

      <section className="flex w-[70vw] items-center gap-x-6">
        <div className="surface bg-white w-[70%] h-32">
          {/* Header */}
          <div className="flex justify-between items-center h-16 mx-3">
            <h3 className="text-2xl text-center">Account Settings</h3>
            <span className="text-sub-dark text-xs font-bold px-2 py-1 bg-gray-300 rounded-4xl">
              Personal
            </span>
          </div>
          <hr className="border border-gray-100" />
          {/* Options */}
          <div className="flex justify-between items-center h-16 mx-3 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-x-2">
              <div className="rounded-full bg-blue-100 p-3">
                <Mail size={32} color="#00a3d7" />
              </div>
              <div>
                <p className="text-md py-1">Email Address</p>
                <p className="text-xs text-muted">johndoe@gmail.com</p>
              </div>
            </div>

            <ChevronRight />
          </div>
        </div>
        <div className="surface bg-white h-32 flex-1"></div>
      </section>
    </main>
  );
};

export default Profile;
