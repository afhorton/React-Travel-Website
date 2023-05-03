//Component for rendering page header
function PageHeader() {
  return (
    <>
      <nav className="navbar navbar-light bg-light mx-auto p-4">
        <div className="container-fluid">
          <div className="col-8">
            <img src="img/adventurer.png" className="comp-icon" />
            <a
              className="navbar-brand text-decoration-none text-dark"
              href="travelPackages.html"
            >
              Adventure Ltd.
            </a>
          </div>
          <nav className="col">
            <a
              href="https://www.nassauparadiseisland.com/deals?gclid=CjwKCAjwiOCgBhAgEiwAjv5whJLnhoOaTY_LO5ngfzEUOS0_UD7nbMG0ZiL185H_cNYlROWM1Qp1yhoCSCEQAvD_BwE"
              className="text-decoration-none text-dark"
            >
              All Packages
            </a>
          </nav>
          <nav lassName="col">
            <a
              href="https://www.amazon.ca/gp/cart/view.html?ref_=nav_cart"
              className="text-decoration-none text-dark"
            >
              Cart
            </a>
          </nav>
        </div>
      </nav>
    </>
  );
}

//Component for rendering page footer
function PageFooter({ compData }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    compData.address.street
  )},${encodeURIComponent(compData.address.city)},${encodeURIComponent(
    compData.address.provence
  )}`;
  return (
    <>
      <div className="container-fluid bg-dark p-3 text-white">
        <div className="row">
          <div className="col d-flex align-items-center mx-3">
            <a
              href="travelPackages.html"
              className="text-decoration-none text-white"
            >
              {compData.name}
            </a>
          </div>
          <div className="col">
            <a
              href={mapUrl}
              target="_blank"
              className="text-decoration-none text-white"
            >
              <div className="row">{compData.address.street},</div>
              <div className="row">{compData.address.city},</div>
              <div className="row">{compData.address.provence}</div>
            </a>
          </div>
          <div class="col d-flex align-items-center">
            <a
              href={"mailto:" + compData.email}
              className="text-decoration-none text-white"
              target="_blank"
            >
              {compData.email}
            </a>
          </div>
          <div class="col d-flex align-items-center">
            <a
              href={"tel:" + compData.phone}
              className="text-decoration-none text-white"
              target="_blank"
            >
              {compData.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
