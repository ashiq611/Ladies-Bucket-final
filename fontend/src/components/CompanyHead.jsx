const CompanyHead = () => {
  return (
    <div className="">
      {/* <h2
        className="text-3xl capitalize font-bold text "
        style={{
          backgroundImage:
            "linear-gradient(142.83deg, #660062 21.93%, #C50076 51.21%, #FFE9F6 123.99%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Ladies-Bucket.Com
      </h2> */}
      <marquee
        scrollAmount="3"
        className="h-10 leading-10 bg-pink-900 text-2xl font-bold text-white"
      >
        EXCLUSIVE OFFER!!!!!!!! 50%
      </marquee>
    </div>
  );
};

export default CompanyHead;
