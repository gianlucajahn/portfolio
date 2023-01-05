import React from 'react';
import './Manifest.scss';
import { motion } from "framer-motion";

export default function Manifest () {
  return (
    <div className="container-manifest">
        <motion.a className="manifest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
            <h1>Ambitionierter Entwickler mit Vorliebe für beeindruckende User-Experiences</h1>
        </motion.a>
    </div>
  );
}
