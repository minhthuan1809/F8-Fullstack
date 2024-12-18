import NavBar from "./components/Nav";

const features = [
  {
    title: "Dễ sử dụng",
    description:
      "FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable",
  },
  {
    title: "Không giới hạn",
    description:
      "FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.",
  },
  {
    title: "Quản lý và chia sẻ",
    description:
      "FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.",
  },
];

const FeatureCard = ({ title, description }) => (
  <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
    <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
    <h5 className="text-xl font-medium uppercase mb-4">{title}</h5>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function HomePage() {
  return (
    <div className="pt-[4rem]">
      <NavBar />

      <main className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-2">
              Học tập hiệu quả với bản đồ tư duy
            </h1>

            <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
              Sử dụng miễn phí
            </button>

            <div className="mt-4">
              <img
                src="https://mindmap.f8.edu.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fso-do-tu-duy.95dad645.jpg&w=1200&q=75"
                alt="Girl in a jacket"
              ></img>
            </div>
          </div>

          <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
