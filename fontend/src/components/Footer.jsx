import logo from "../assets/company-logo.png";

const Footer = () => {
    return (
      <div className="mt-5">
        <footer className="footer p-10 bg-base-200 text-base-content">
          <aside>
            <img src={logo} alt="" />
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <form>
            <h6 className="footer-title">Contact Us</h6>
            <fieldset className="form-control w-80">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered join-item"
                />
                <textarea
                  className="textarea textarea-accent"
                  placeholder="Message"
                ></textarea>
                <button className="btn bg-[#660062] text-white border-[#660062] btn-xs hover:text-black">Send</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    );
};

export default Footer;