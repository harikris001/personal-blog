import Image from "next/image";

const Profile = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="bg-gray-300 w-[80vw] rounded-2xl m-5 flex">
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
        <div className="flex-1"></div>
      </section>
      <div>insight section</div>

      <section>Account settings</section>
    </main>
  );
};

export default Profile;
