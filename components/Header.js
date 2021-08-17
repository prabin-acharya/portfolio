import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h2 className={headerStyles.title}>Prabin Acharya</h2>
      <p className={headerStyles.description}>
        I am a sophmore student having keen interest in Full Stack Software
        Development
      </p>
    </div>
  );
};

export default Header;
