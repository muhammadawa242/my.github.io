import PageHeader from "../../components/PageHeader";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Resume = ({ brand }) => {
  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
            <a target="_blank" href="https://drive.google.com/file/d/1WlzGwDgHl9uY7v9BqF8J4ISp8NP_qSsu/view">
                <motion.button
                className="btn"
                // Apply scale animation on hover
                whileHover={{ scale: 1.05 }}
                // Apply scale animation on tap
                whileTap={{ scale: 0.99 }}
                style={{ backgroundColor: "sky-blue"}}
                >
                {/* Display the button name */}
                Resume
                <div>
                    {/* Display the arrow icon */}
                    <FiArrowUpRight className="arrow-icon" />
                </div>
                </motion.button>
            </a>
    </section>
  );
};

export default Resume;
