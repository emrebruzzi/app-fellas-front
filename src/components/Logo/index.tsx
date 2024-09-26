import { FaPlane } from "react-icons/fa"; // İkonu import edin

const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <FaPlane size={30} color="white" /> {/* Uçak simgesi */}
    </div>
  );
};

const styles = {
  logoContainer: {
    backgroundColor: "#660099",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
  },
};

export default Logo;
