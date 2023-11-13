import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Mission from "./Mission";
import Values from "./Values";
import styles from './About.module.css'

export default function About() {
    return(
        <div>
            <h2>About Page</h2>
            <nav className={styles.aboutNav}>
                <Link to='us'>Abaut us</Link>
                <Link to='mission'>Mission</Link>
                <Link to='values'>Our values</Link>
            </nav>

            <Routes>
                <Route path="us" element={<AboutUs />} />
                <Route path="mission" element={<Mission />} />
                <Route path="values" element={<Values />} />
            </Routes>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, odit! Odio facere recusandae odit eius rerum possimus voluptates mollitia, accusamus minima nam doloribus atque beatae error corporis fuga nesciunt porro sequi quaerat deleniti voluptas a numquam consequuntur vel? Illum assumenda id nesciunt provident totam voluptatibus ipsa laboriosam quod, blanditiis debitis!</p>
        </div>
    );
}