import { motion } from "framer-motion";

function Contact() {
return (
<motion.div
initial={{ x: 100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.5 }}
>
<h1>Kontakt</h1>
{/* Hier kannst du weitere Inhalte einfügen */}
</motion.div>
);
}

export default Contact;