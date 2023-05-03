//List of Travel packages
const travelPackageList = [
  {
    id: 100,
    title: "Vulcan Island",
    image: {
      src: "img/vulcanIsland.jpeg",
      alt: "Vulcan Island",
      size: { width: "90%", height: 200 },
    },
    summary: "A lost island paradise.",
    description:
      "Get lost on a volcanic island thousands of miles from anywhere.  The food is to die for as are the local gods.",
    price: 1200,
  },
  {
    id: 200,
    title: "Blue Dunes",
    image: {
      src: "img/blueDunes.jpeg",
      alt: "Blue Dunes",
      size: { width: "90%", height: 200 },
    },
    summary: "Enjoy skiing and surfing in the same locale.",
    description:
      "Between the snow and the sea, what is there not the love about this far-northern result?",
    price: 1400,
  },
  {
    id: 300,
    title: "Tongo Hiti",
    image: {
      src: "img/tongoHiti.jpeg",
      alt: "Tongo Hiti",
      size: { width: "90%", height: 200 },
    },
    summary: "The jet set meets the maritime.",
    description:
      "Passion hides in painted smiles. Tropical liaisons. Wet and wild. Mingle and chime and ladder climb for glamour and for glow.",
    price: 1500,
  },
  {
    id: 400,
    title: "Ayer's Hole",
    image: {
      src: "img/ayersHole.jpg",
      alt: "Ayer's Hole ",
      size: { width: "90%", height: 200 },
    },
    summary: "An adventure out back.",
    description:
      "The crater is also notable for its sheer size, standing 348 meters deep and with a circumference of 9.4 kilometers.",
    price: 1600,
  },
  {
    id: 500,
    title: "Tristan Da Cunha",
    image: {
      src: "img/tristanDaCunha.jpg",
      alt: "Tristan Da Cunha",
      size: { width: "90%", height: 200 },
    },
    summary: "The comforts of civilization on distant isles.",
    description:
      "The island is a British Overseas Territory and is home to a unique ecosystem.",
    price: 1800,
  },
  {
    id: 600,
    title: "Saskatoon",
    image: {
      src: "img/saskatoon.jpg",
      alt: "Saskatoon",
      size: { width: "90%", height: 200 },
    },
    summary: "Almost as good as Regina.",
    description:
      "Saskatoon is known for its beautiful natural landscapes and outdoor recreational opportunities.",
    price: 2000,
  },
];


function PackagesView() {
  const [isClicked, setIsClicked] = React.useState(false);
  
  return (
    <>
      <PageHeader />
      <div className="container">
        <div className="row text-center m-5 p-5 header-flag">
        <h1 className="">Travel Adventure</h1>
        <hr />
        <figcaption className="figure-caption text-dark">
          <em>Because your a** doesn't get out enough!</em>
        </figcaption>
        </div>
        <div className="card-group m-5">
          {travelPackageList.map((pkg) => (
            <div className="col-lg-4 col-md-6 p-2">
              <PackageCard key={pkg.id} packageData={pkg} />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <PageFooter compData={compData} />
      </div>
    </>
  );
  
}
