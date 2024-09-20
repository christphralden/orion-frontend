import { useAuthStore } from "@authentication/store/auth-store";

const Home = () => {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <div className="w-full h-screen justify-center items-center flex">
      <h1>
        {isAuthenticated
          ? `Welcome, you're authenticated! ${user?.name}`
          : "Home"}
      </h1>
    </div>
  );
};

export default Home;
