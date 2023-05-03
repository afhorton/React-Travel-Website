//Component for rendering travel packages
function PackageCard({ packageData }) {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <>
      <div className="card trans-card h-100" onClick={handleClick}>
        <img
          className="card-img-top h-100"
          src={packageData.image.src}
          alt={packageData.image.alt}
          size={packageData.image.size}
        />
        <h2 className="card-title text-center">{packageData.title}</h2>
        <div className="card-body text-center">
          <p>{packageData.summary}</p>
        </div>
        <div className="card-footer">
          <div className="text-center">
            <h4>
              <em>Find out more!</em>
            </h4>
          </div>
        </div>
      </div>
      <Popup
        packageData={packageData}
        clicked={isClicked}
        onClose={() => setIsClicked(false)}
      />
    </>
  );
}

//Popup component
function Popup({ packageData, clicked, onClose }) {
  if (!clicked) return null

  return ReactDOM.createPortal(
    <>
      <div className="overlay">
        <div className="container align-bottom w-50 h-50">
          <div className="card popup">
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top h-75 w-75"
                src={packageData.image.src}
                alt={packageData.image.alt}
                size={packageData.image.size}
              />
            </div>
            <h2 className="card-title text-center">{packageData.title}</h2>
            <div className="card-body text-center">
              <p>{packageData.description}</p>
            </div>
            <div>
              <h5 className="text-center">
                Packages starting at ${packageData.price}
              </h5>
            </div>
            <div className="package-card-footer">
              <div className="text-center row">
                <button className="btn btn-primary">
                  <a
                    href="https://www.expedia.ca/login?ckoflag=0&uurl=e3id%3Dredr%26rurl%3D%2FVacation-Packages%3Fsemcid%3DCA.UB.GOOGLE.GT-c-EN.PACKAGE%26SEMDTL%3Da110841270850.b1109327918760.r1.g1kwd-5556663974.i1.d1457008460246.e1c.j19001331.k1.f1.n1.l1g.h1b.m1%26gclid%3DCjwKCAjwiOCgBhAgEiwAjv5whN-7h-O7-EqGAPpOxkvi4RGZLUHU8BFE7V3S_413VcejlitxPx9kUhoCCTkQAvD_BwE"
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    Login
                  </a>
                </button>
                <button className="btn btn-primary">
                  <a
                    href="https://www.amazon.ca/gp/cart/view.html?ref_=nav_cart"
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    Buy
                  </a>
                </button>
                <button className="btn btn-light" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

