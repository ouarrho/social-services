import logo from '@svg/logo.svg?v=2'

export default function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="single-footer f-about">
                <div className="logo">
                  <a href="index.html">
                    <img src={ logo } width="180" height="180" alt="logo"></img>
                  </a>
                </div>
                <p>Rendre le monde meilleur en construisant un web élégant.</p>
                <p className="copyright-text">Conçu et développé par <a href="#"
                  rel="nofollow">Our Team</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
