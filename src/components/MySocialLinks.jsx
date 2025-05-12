






function SocialMedia() {
    return (
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/sunilyadav8"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub className="social-icon" />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/sunilkumaryadav84/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn className="social-icon" />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="mailto:abdulfatahchandio010@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <MdEmail className="social-icon" />
          </a>
        </li>
      </ul>
    );
  }
export default SocialMedia