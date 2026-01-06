import CategoriesAndSearch from "@/app/components/CategoriesAndSearch";
import Hero from "@/app/components/Hero";
import BlogPost from "@/app/components/BlogPost";

const HomePage = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow mx-16">
        <Hero />

        {/* Categories and Search */}
        <CategoriesAndSearch />

        {/* Blogs */}
        <section className="flex flex-wrap gap-5">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </section>
      </main>

      <footer>
        <p>&copy; 2023 My Personal Blog</p>
      </footer>
    </div>
  );
};

export default HomePage;
